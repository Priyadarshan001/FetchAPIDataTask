import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsId, setCartItemsId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://fakestoreapi.com/products?limit=n"
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  // const onAdd = (item) => {
  //   // event.preventDefault();
  //   // let item_id_added_to_cart = event.target.getAttribute("cart-item-id");
  //   // console.log(
  //   //   "printing the item-id which was added to cart",
  //   //   item_id_added_to_cart
  //   // );

  //   // let new_item_in_cart = data[item_id_added_to_cart - 1];
  //   // setCartItems([...cartItems, new_item_in_cart]);
  //   console.log(item);
  // };

  const onAdd = (itemId) => {
    console.log(itemId);
    setCartItemsId([...cartItemsId, itemId]);

    //   const exist = cartItems.find((x) => x.id === item.id);
    //   if (exist) {
    //     setCartItems(
    //       cartItems.map((x) =>
    //         x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
    //       )
    //     );
    //   } else {
    //     setCartItems([...cartItems, { ...item, qty: 1 }]);
    //   }
    // };
    // const onRemove = (item) => {
    //   const exist = cartItems.find((x) => x.id === item.id);
    //   if (exist.qty === 1) {
    //     setCartItems(cartItems.filter((x) => x.id !== item.id));
    //   } else {
    //     setCartItems(
    //       cartItems.map((x) =>
    //         x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
    //       )
    //     );
    //   }
  };
  console.log("CartItemsID: ", [...cartItemsId]);
  return (
    <div>
      <div className="heading">
        <center>
          <h1>Store</h1>
        </center>
        <div>
          <img className="cart-img" alt="Cart here" />
        </div>
      </div>
      <div>
        {data.map((item) => (
          <div>
            <div className="item">
              <img className="image" src={item.image} alt={item.id} />
              <div className="item_detail">
                <div className="inner">Title: {item.title}</div>
                <div className="inner">Price: ${item.price}</div>
                <div className="inner">Description: {item.description}</div>
                <div className="inner">Category: {item.category}</div>
              </div>
              <div>
                <span
                  type="button"
                  onClick={() => onAdd(item.id)}
                  className="addcartbutton"
                  cart-item-id={item.id}
                >
                  Add to Cart
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3>Order Summary:</h3>
        <h5>
          {cartItems.map((item) => (
            <>
              <div className="inner">Title: {item.title}</div>
              <div className="inner">Price: {item.price}</div>
            </>
          ))}
        </h5>
      </div>
    </div>
  );
}

export default App;
