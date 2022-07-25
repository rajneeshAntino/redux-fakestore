import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { removeFromCart } from '../redux/actions/cartActions';

function CartItem({ item }) {


    const { id, title, image, description, quantity, price } = item
    const dispatch = useDispatch()


    const handleClick = (id) => {
        
        dispatch(removeFromCart(id))
    }

    return (

        <div style={{
            margin: "20px",
            display: "flex",
            alignItems: "center",
            position: "relative",
            boxShadow: " 0px 0px 8px gray",
            borderRadius: "6px",padding:"20px"
        }}>
            <div style={{maxWidth:"150px",marginRight:"20px"}}>
                <img style={{width:"100%"}} src={image} alt="" />
            </div>
            <span onClick={() => handleClick(id)} style={{fontSize: "22px", position: "absolute", top: "10px", right: "20px", cursor: "pointer"}}>X</span>
            <div>
                <h3 style={{fontSize:"18px",fontWeight:"400",textAlign:"start"}}><span style={{fontWeight:"700"}}>Title : </span>{title}</h3>
                <h4 style={{fontSize:"14px",fontWeight:"400",textAlign:"start"}}><span style={{fontWeight:"700"}}>Description : </span>{description}</h4>
                <h4 style={{fontSize:"14px",fontWeight:"400",textAlign:"start"}}><span style={{fontWeight:"700"}}>Quantity : </span>{quantity}</h4>
                <h5 style={{fontSize:"14px",fontWeight:"400",textAlign:"start"}}><span style={{fontWeight:"700"}}>Price :  ₹ </span>{price}</h5>
            </div>
        </div>
    )
}

export default CartItem



