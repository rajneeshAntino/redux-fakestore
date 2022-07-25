import { ActionTypes } from '../constants/action-types'

const initialState = {
    products: [],
    cart: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case ActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, action) => {

    const { type, payload } = action

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            // returning a new state of store
            return {
                ...state,
                ...payload
            };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            // returning a new state of store
            return {
            };
        default:
            return state
    }
}


