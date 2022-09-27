export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const ADD_CART = 'ADD_CART' ;
export const FETCH_DATA = 'FETCH_DATA' ;
export const DELETE_CART = 'DELETE_CART';

export function addCart(payload){
    return {
        type: ADD_CART,
        payload
    }
}

export function fetchdata(payload){
    return{
        type: FETCH_DATA,
        payload
    }
}

export function increaseQuantity(payload){
    return{
        type:'INCREASE_QUANTITY',
        payload
    }
}
export function decreaseQuantity(payload){
    return{
        type:'DECREASE_QUANTITY',
        payload
    }
}

