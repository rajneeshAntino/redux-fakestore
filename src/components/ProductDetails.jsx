import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'
import { addQuantity, removeQuantity, removeSelectedProduct, selectedProduct } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'






const ProductDetails = () => {
    
    const { productId } = useParams();
    const allProducts = useSelector((state) => (state.allProducts.products));
    
    // const { image, title, price, description } = product.length ? product[0] : empty;
    const dispatch = useDispatch();
    
    
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [count, setCount] = useState(1)
    const navigate = useNavigate()


    useEffect(() => {
        // if (productId && productId !== "") fetchProductDetail(productId);
        // return () => {
        //     dispatch(removeSelectedProduct());
        // };

        const fetchProductDetail = () => {
            // const response = await axios
            //     .get(`https://fakestoreapi.com/products/${id}`)
            //     .catch((err) => {
            //         console.log("Err: ", err);
            //     });
            // dispatch(selectedProduct(response.data));

            const resp = allProducts.filter((val) => val.id.toString() === productId)
            return resp;
        };

        setProduct(fetchProductDetail())

    }, [productId]);


    




    const handleAddToCart = (product) => {
        
        const Cart = localStorage.getItem("cart")? JSON.parse(localStorage.getItem('cart')) : []

        if(!Cart.length) {
            product.quantity = count;   
            Cart.push(product)
            localStorage.setItem("cart",JSON.stringify(Cart))
        }
        else{
            const findProduct = Cart.find((item) => item.id === product.id)

            if(findProduct) {
                findProduct.quantity += count;
                const productIndex = Cart.findIndex((item) => item.id === product.id)
                Cart.splice(productIndex, 1);
                const newCart = [...Cart, findProduct]
                localStorage.setItem("cart", JSON.stringify(newCart));
            }
            else {
                product.quantity = count;
                const newCart = [...Cart, product]
                localStorage.setItem("cart", JSON.stringify(newCart))
            }
        }
        navigate('/cart')
    }



    return (
        <>
        <Header />
        {
            product.length === 0 ? <div>Loading ...</div> :
            <div style={{  display: "flex", justifyContent: "center" , margin: "50px"}}>
                <div style={{border: "1px solid black", width: '400px', margin: '10px',  padding: "10px" }}>
                    <img style={{ width: '200px' }} src={product[0].image} />
                    <div style={{ margin: '8px', fontSize: "28px" }}>{product[0].title}</div>
                    <div style={{ fontSize: "20px", fontWeight: "lighter" }}>{product[0].description}</div>
                    <div style={{ fontSize: "20px", fontWeight: "normal", margin: "8px 0px" }}> ₹ {product[0].price}</div>
                    <div  style={{margin: "14px 0px" , display: "flex", justifyContent: "space-around", }}>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <button onClick={() => count>1 && setCount(count-1)} style={{cursor: 'pointer', fontSize: "24px",  height: "40px"}}> − </button>
                            <p style={{fontSize: "28px", margin: "0px 8px"}}>{count}</p>
                            <button onClick={() => setCount(count+1)} style={{cursor: 'pointer', fontSize: "24px", height: "40px"}}> + </button>
                        </div>
                        {/* <div onClick={() => displayRazorpay(product[0])} style={{ cursor: 'pointer', fontSize: "24px", backgroundColor: "blueViolet", color: "white", padding: "4px 8px", borderRadius: "4px" }}>Buy - ₹ {product[0].price}</div> */}
                        <button onClick={() => handleAddToCart(product[0])} style={{fontSize: "20px", cursor: 'pointer'}}>Add to Cart</button>
                    </div>
                    
                </div>  
            </div>
        }
        </>
    )
}

export default ProductDetails