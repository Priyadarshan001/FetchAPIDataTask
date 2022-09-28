import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function App() {
  const [data, setData] = useState([]);
  const [cartMap, setCartMap] = useState(new Map());
  let totalQuantity = 0;
  let totalPrice = 0;

  useEffect(() => {
    console.log("inside use effect...");
    const fetchData = async () => {
      try {
        console.log("calling fetch API...");
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

  const onAdd = (item) => {
    console.log(
      "Inside onAdd. Printing the item-id which was added to cart",
      item.id
    );

    let cartObject = {};
    cartObject.quantity = 1;
    cartObject.id = item.id;
    cartObject.price = item.price;
    cartObject.title = item.title;
    cartObject.image = item.image;

    if (cartMap.has(item.id)) {
      let existingObj = cartMap.get(item.id);
      cartObject.quantity = existingObj.quantity + 1;
      cartObject.price = existingObj.price + item.price;
    }

    setCartMap(new Map(cartMap.set(item.id, cartObject)));
  };

  console.log("cart values, rendering components...");
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

        <div>
          <table>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {[...cartMap.values()].map((val) => {
              totalQuantity = totalQuantity + val.quantity;
              totalPrice = totalPrice + val.price;
              return (
                <tr key={val.id}>
                  <td>{val.title}</td>
                  <td>{val.quantity}</td>
                  <td>{Number(val.price).toFixed(2)}</td>
                </tr>
              );
            })}
            <tr>
              <td>Total</td>
              <td>{totalQuantity}</td>
              <td>{Number(totalPrice).toFixed(2)}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
