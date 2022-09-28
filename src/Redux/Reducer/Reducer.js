import { ADD_CART } from "../Action/Action"



const initialstate = {
    cartMap : new Map(),
}

export default function handleProduct(state = initialstate, action) {
    console.log("action type: ", action.type, state.cartMap)
    switch(action.type){
        case ADD_CART:
            console.log("inside reducer 1st line", action.payload)
            let item = action.payload
            let cartObject = {}
            cartObject.quantity = 1
            cartObject.id = item.id
            cartObject.price = item.price
            cartObject.title = item.title
            cartObject.image = item.image
        
            console.log("inside reducer", state)
            if(state.cartMap.has(item.id)){
              let existingObj = state.cartMap.get(item.id);
              cartObject.quantity = existingObj.quantity + 1
              cartObject.price = existingObj.price + item.price
        
            }

            state.cartMap.set(item.id, cartObject)
            return state
            
        default: 
            console.log("inside DEFAULT", state)
            return state
        }
        
    }