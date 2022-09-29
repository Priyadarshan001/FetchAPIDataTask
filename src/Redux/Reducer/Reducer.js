import { ADD_CART } from "../Action/Action";
import { DECREASE_QUANTITY } from "./../Action/Action";
import { INCREASE_QUANTITY } from "../Action/Action";

const initialstate = {
  cartMap: new Map(),
};

export default function handleProduct(state = initialstate, action) {
  console.log("action type: ", action.type, state.cartMap);

  switch (action.type) {
    case ADD_CART:
      console.log("inside reducer 1st line", action.payload);
      let item = action.payload;
      let cartObject = {};
      cartObject.quantity = 1;
      cartObject.id = item.id;
      cartObject.price = item.price;
      cartObject.perUnitPrice = item.price;
      cartObject.title = item.title;
      cartObject.image = item.image;

      console.log("inside reducer", state);
      if (state.cartMap.has(item.id)) {
        let existingObj = state.cartMap.get(item.id);
        cartObject.quantity = existingObj.quantity + 1;
        cartObject.price = existingObj.price + item.price;
      }
      state.cartMap.set(item.id, cartObject);
      return state;

    default:
      console.log("inside DEFAULT", state);
      return state;

    case INCREASE_QUANTITY:
      let item2 = action.payload;
      console.log("item2", item2.id);
      let existingObj = state.cartMap.get(item2.id);

      existingObj.quantity = existingObj.quantity + 1;
      existingObj.price = existingObj.quantity * item2.perUnitPrice;
      
      state.cartMap.set(item2.id, existingObj);
      return { ...state };

    case DECREASE_QUANTITY:
      let item3 = action.payload;
      console.log("item3", item3);
      
      let existingObj2 = state.cartMap.get(item3.id);

      existingObj2.quantity = existingObj2.quantity - 1;
      existingObj2.price = existingObj2.quantity * item3.perUnitPrice;
      if (existingObj2.quantity === 0){
        state.cartMap.delete(item3.id)
      }else{
        state.cartMap.set(item3.id, existingObj2);
      }
      return { ...state };
  }
}
