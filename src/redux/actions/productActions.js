import { ActionTypes } from "../constants/action-types"
import fakeStoreApi from '../../apis/fakeStoreApi'



export const fetchProducts = () => {

    // Note: we can use async in this inner function but can't use async with fetchProducts
    return async (dispatch) => {
        const response = await fakeStoreApi.get('/products')
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload: response.data,
        })
    }
}


export const fetchProduct = (id) => {

    // Note: we can use async in this inner function but can't use async with fetchProducts
    return async (dispatch) => {
        const response = await fakeStoreApi.get(`/products/${id}`)
        dispatch({
            type: ActionTypes.SELECTED_PRODUCT,
            payload: response.data,
        })
    }
}


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}







// export const addQuantity = (payload) => {
//     return (dispatch) => {
        
//         // if(localStorage.getItem("Cart")) {
//         //     let Cart = localStorage.getItem("Cart")
//         //     if(Cart.includes(id)) {
//         //         const product = Cart.find(id)
//         //         const quantity = product.quantity + 1;
//         //         Cart = {...Cart, id: quantity}
//         //     }
//         //     else {
//         //         Cart = {...Cart, id: 1}
//         //     }
//         //     localStorage.setItem("Cart", Cart)
//         // }
//         // else {
//         //     const Cart = {
//         //         id: 1
//         //     }
//         //     localStorage.setItem("Cart", Cart)
//         // }


//         const Cart = localStorage.getItem("cart")?JSON.parse( localStorage.getItem("cart")):[]


//         if(Cart.length===0){
//             payload.quantity = 1
//             Cart.push(payload)
//             localStorage.setItem("cart",JSON.stringify(payload))

//         }else{
//             const product = Cart.find((item) => item.id === payload.id)
//             product.quantity += 1;
//             const productIndex = Cart.findIndex((item) => item.id === payload.id)

//             Cart.splice(productIndex, 1);
//             var newCart = [...Cart, product]
//             localStorage.setItem("cart", JSON.stringify(newCart));
//         }

//         dispatch({
//             type: ActionTypes.ADD_QUANTITY,
//             payload: newCart
//         })
//     }
// }


// export const removeQuantity = (id) => {
//     return (dispatch) => {
//         const Cart = localStorage.getItem("cart")?JSON.parse( localStorage.getItem("cart")):[]


//         if(Cart.length===0){
//             alert("Cart is empty by the way")

//         }else{
//             const product = Cart.find((item) => item.id === id)

            
            
//             const productIndex = Cart.findIndex((item) => item.id === id)
//             Cart.splice(productIndex, 1);

//             if(product.quantity > 1) {
//                 product.quantity -= 1;
//                 const newCart = [...Cart, product]
//                 localStorage.setItem("cart", JSON.stringify(newCart));
//             }
//             else {
//                 var newCart = [...Cart]
//                 localStorage.setItem("cart", JSON.stringify(newCart));
//             }
//         }
        
//         dispatch({
//             type: ActionTypes.REMOVE_QUANTITY,
//             payload: newCart
//         })
//     }
// }





