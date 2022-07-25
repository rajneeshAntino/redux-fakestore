import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Product = ({ product }) => { 
    
    const { image, title, price, id } = product;
    const navigate = useNavigate()


    const handleClick = (id) => {
        return navigate(`/product/${id}`)
    }

    return (
        <div onClick={() => handleClick(id)} style={{ width: '300px', margin: '10px', border: '1px solid black', padding: "10px" }}>
            <img style={{ width: '200px' }} src={image} />
            <div style={{ fontWeight: 'bolder', margin: '8px' }}>{title}</div>
            <div>$ {price}</div>
        </div>
    )
}

export default Product



// let arr = []

// function recu(obj, temp) {
//     if(obj.parent) {
//         recu(obj)
//     }
//     temp.push(obj.name)
// }

// function print(obj) {
//     for(cat in category) {
//         let temp = [];
//         if(cat.parent) {
//             recu(cat.parent, temp)
//         }
//         temp.push(cat.name)
//     }
//     arr.push(temp)
// }