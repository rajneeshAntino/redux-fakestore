import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartIcon } from "../Assests/index"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {

  const navigate = useNavigate()
  

  // handling click 
  const handleClick = () => {
    return navigate('/cart')
  }
  

  // adding comment for git practise
  // more bla bla bla

  // Bla bla bla
  const [count, setCount] = useState(0); 
  const cart = useSelector(state => state.cart.cart)
  
  useEffect(() => {
    const cartCount = () => {
      let c = 0;
      for(let x of cart) {
        c += x.quantity
      }
      setCount(c)
    }
    cartCount()
  }, [cart])

  return (
    <div style={{ boxShadow: "0px 0px 4px gray", display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "4px 20px", alignItems: "center" }}>
      <div style={{ fontWeight: 'lighter', fontSize: 40 }}>
        <Link style={{ textDecoration: "none", color: "black" }} to={'/'}>
          Shop
        </Link>
      </div>
      <div style={{position: "relative"}}>
        <div style={{zIndex: "1", position: "absolute", right:"-6px", bottom: "16px", width: "20px", backgroundColor: "blueviolet", borderRadius: "100%", padding: "0px", fontSize: "16px", color: "white" }}>
          {count}
        </div>
        <div onClick={() => handleClick()} style={{ cursor: "pointer", width: "30px", height: "30px", position: "relative" }}>
          <img style={{ width: "100%" }} src={cartIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header