import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  let totalQuantity =0;
  let totalPrice =0;
  const myState= useSelector((state)=>state.handleProduct)
  console.log("Mystate",myState)
  return (
    <div>
        <h3>Order Summary:</h3>



    <div >
      <table>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {[...myState.cartMap.values()].map(val => {
         totalQuantity = totalQuantity + val.quantity
         totalPrice = totalPrice + val.price
            return (
              <tr key={val.id}>
              <td ><img src={val.image} alt="pic here"/></td>
              <td>{val.title}</td>
              <td>{val.quantity}</td>
              <td>{Number(val.price).toFixed(2)}</td>
            </tr>
            )
          })
        }
         <tr>
          <td>Total</td>
          <td>{totalQuantity}</td>
          <td>{Number(totalPrice).toFixed(2)}</td>
         </tr>
      </table>
    </div>


      </div>
  )
}

export default Cart