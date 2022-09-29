import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../style.css";
import { decreaseQuantity, increaseQuantity } from "./../Redux/Action/Action";

function Cart() {
  let totalQuantity = 0;
  let totalPrice = 0;
  const myState = useSelector((state) => state.handleProduct);
  const dispatch = useDispatch();
  console.log("Mystate", myState);

  return (
    <div>
      <div className="heading">
        <center>
          <h1>Cart</h1>
        </center>
      </div>
      <h3>Order Summary:</h3>

      <div>
        <table>
          <tr>
            <th>Image</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {[...myState.cartMap.values()].map((val) => {
            totalQuantity = totalQuantity + val.quantity;
            totalPrice = totalPrice + val.price;
            return (
              <tr key={val.id}>
                <td>
                  <img className="tableimage" src={val.image} alt="pic here" />
                </td>
                <td>{val.title}</td>
                <button onClick={() => dispatch(decreaseQuantity(val))}>-</button>
                <td>{val.quantity}</td>
                <button onClick={() => dispatch(increaseQuantity(val))}>+</button>
                <td>{Number(val.price).toFixed(2)}</td>
              </tr>
            );
          })}
          <tr>
            <td className="total"></td>
            <td className="total">Total</td>
            <td className="total">{totalQuantity}</td>
            <td className="total">{Number(totalPrice).toFixed(2)}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Cart;
