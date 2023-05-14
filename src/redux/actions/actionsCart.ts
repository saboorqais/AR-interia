import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/constants";

export function AddToCart(item: any) {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}


export function RemoveFromCart(item: any) {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}