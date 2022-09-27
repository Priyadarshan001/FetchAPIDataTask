


const initialstate = {
    cartMap : new Map(),
    data: [],
}

export default function handleProduct(state = initialstate, action) {
    switch(action.type){
        case FETCH_DATA:

            return{
                ...state,
                data:action.payload
            }
        case ADD_CART:
            let item = action.payload
            let cartObject = {}
            cartObject.quantity = 1
            cartObject.id = item.id
            cartObject.price = item.price
            cartObject.title = item.title
            cartObject.image = item.image
        
        
            if(state.cartMap.has(item.id)){
              let existingObj = cartMap.get(item.id);
              cartObject.quantity = existingObj.quantity + 1
              cartObject.price = existingObj.price + item.price
        
            }

            state.cartMap.set(item.id, cartObject)

        }
    }