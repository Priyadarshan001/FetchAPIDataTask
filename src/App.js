import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsList, setCartItemsList] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [newArray, setNewArray] = useState([]);

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

  useEffect(() => {
    console.log(newArray);
  }, [newArray]);

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

  // var a  = [];  //state variable

  // a.item.id // incculdes
  // a.push
  // a[indexof].qua = +1

  const onAdd = (item) => {
    //data.itemQuantity = 0;
    // var newArray = [];

    // console.log("item is :", item);
    // let newItem = data[item.id - 1];

    // console.log(newItem);
    // setCartItems([...cartItems, newItem]);

    const exist = newArray.includes(item.id);
    if (!exist) {
      setNewArray((prevState) => {
        return [...prevState, item];
      });
    }
  };

  function removeDuplicates(cartItems) {
    return [...new Set(cartItems)];
  }
  console.log("after removing", removeDuplicates(cartItems));
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
          <div key={item.id}>
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
                  onClick={() => onAdd(item)}
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
          {removeDuplicates(cartItems).map((value) => (
            <>
              <div className="inner">Title: {value.title}</div>
              <div className="inner">Price: {value.price}</div>
            </>
          ))}
        </h5>
      </div>
    </div>
  );
}

export default App;
