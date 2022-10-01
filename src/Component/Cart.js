import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../style.css";
import {
  decreaseQuantity,
  increaseQuantity,
  deleteItem,
} from "./../Redux/Action/Action";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

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
      <div>
        <h3>Order Summary:</h3>
        <div>
          <table>
            <tbody>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th></th>
              <th>Quantity</th>
              <th></th>
              <th>Price</th>
              <th></th>
            </tr>
            {[...myState.cartMap.values()].map((val) => {
              totalQuantity = totalQuantity + val.quantity;
              totalPrice = totalPrice + val.price;
              return (
                <tr key={val.id}>
                  <td>
                    <img
                      className="tableimage"
                      src={val.image}
                      alt="pic here"
                    />
                  </td>
                  <td>{val.title}</td>
                  <div>
                    <button
                      onClick={() => dispatch(decreaseQuantity(val))}
                      className="button">-</button>
                  </div>
                  <td>{val.quantity}</td>
                  <div>
                    <button
                      onClick={() => dispatch(increaseQuantity(val))}
                      className="button"
                    >+</button>
                  </div>
                  <td>{Number(val.price).toFixed(2)}</td>
                  <RemoveShoppingCartIcon
                    onClick={() => dispatch(deleteItem(val))}
                    className="button"
                  />
                </tr>
              );
            })}
            <tr>
              <td className="total"></td>
              <td className="total">Total</td>
              <td className="total"></td>
              <td className="total">{totalQuantity}</td>
              <td className="total"></td>
              <td className="total">{Number(totalPrice).toFixed(2)}</td>
              <td className="total"></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
