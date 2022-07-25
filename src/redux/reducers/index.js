import {productReducer, selectedProductReducer} from "./productReducer"   
import {cartReducer} from "./cartReducer"   
import {combineReducers} from 'redux'


export const rootReducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: cartReducer,
})