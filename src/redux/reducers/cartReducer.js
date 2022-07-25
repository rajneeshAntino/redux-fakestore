import { ActionTypes } from '../constants/action-types'

const initialState = {
    products: [],
    cart: []
}



export const cartReducer = (state = initialState, action ) => {
    const {type, payload} = action 
    switch(type) {
        case ActionTypes.GET_CART:
        return {
            ...state,
            cart: payload
        }
        case ActionTypes.REMOVE_CART:
        return  {
            ...state,
            cart: payload
        }
        default:
            return state
    }
}