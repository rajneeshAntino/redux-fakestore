import { ActionTypes } from "../constants/action-types"

export const getFromCart = () => {
    return  (dispatch) => {
        const response = JSON.parse(localStorage.getItem('cart'))
        
        dispatch({
            type: ActionTypes.GET_CART,
            payload: response,
        })
    }
}

export const removeFromCart = (id) => {
    return (dispatch) => {
        const response = JSON.parse(localStorage.getItem('cart'))
        const index = response.findIndex(item => item.id === id)
        response.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(response))
        dispatch({
            type: ActionTypes.REMOVE_CART,
            payload: response
        })
    }
}