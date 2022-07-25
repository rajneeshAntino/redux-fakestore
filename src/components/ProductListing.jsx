import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/actions/productActions'
import Header from './Header'
import Product from './Product'

const ProductListing = () => {

  const allProducts = useSelector(state => state.allProducts.products)
  // const [allProducts, setAllProducts] = useState(products)
  const dispatch = useDispatch();
  const [ProductData, setProductData] = useState([])
  const category = useRef("")


  useEffect(() => {
    dispatch(fetchProducts());

  }, [])
  useEffect(() => {
    if (allProducts.length) {
      setProductData(allProducts)
    }
  }, [allProducts])


  const handleSearch = () => {
    if (!category.current.value.length)
      return alert("Enter a category first")
    const filteredProducts = allProducts.filter(item => item.category === category.current.value)
    setProductData(filteredProducts)
  }


  return (
    <>
      <Header />
      <div>
        <input ref={category} style={{ padding: "8px 10px", fontSize: "18px", margin: "20px 2px", borderRadius: "4px", border: "1px solid black" }} type="text" placeholder='Enter Category' />
        <button onClick={() => handleSearch()} style={{ padding: "8px 10px", fontSize: "18px", margin: "20px 0px", borderRadius: "4px", cursor: "pointer", border: "none", backgroundColor: "blueviolet", color: "white" }}>Search</button>
      </div>
      <div style={{ margin: "10px", display: "flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {
          !ProductData.length ? <div style={{ fontSize: "24px", margin: "40px auto", textAlign: "center" }}> No Products Found! </div> :
            ProductData.map((product) => <Product key={product.id} product={product} />)
        }
      </div>
    </>
  )
}

export default ProductListing