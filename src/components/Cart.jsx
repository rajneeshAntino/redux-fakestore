import React, { useEffect, useState } from 'react'
import { getFromCart } from '../redux/actions/cartActions'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import Header from './Header'

const handlePayment = (src) => {
  
  return new Promise((resolve) => {
    
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

export const Cart = () => {
  
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  // const cart = JSON.parse(localStorage.getItem('cart'))


  const createOrder = () => {

    // call api for creating order and then get the required order object which contains
    // orderId, amount, etc
    // example ---->
    const paymentInfo = {
      order_id: "order_9A33XWu170gUtm" ,
      price: 200,
      currency: "INR",
      name: "Rajneesh",
      description: "Description of Payment",
      logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-logo-design-for-paint-ink-creative-template-b20133b47fab9a2290a9874d53a838f7_screen.jpg?ts=1574079014",
    }
    
    displayRazorpay(paymentInfo)
  }


  async function displayRazorpay(paymentInfo) {

    const res = await handlePayment('https://checkout.razorpay.com/v1/checkout.js')    

    if (!res) {
      return alert("Razorpay failed to load, check your Internet Connection.")
    }

    var options = {
      "key": process.env.REACT_APP_RAZORPAY_TEST_KEY, // Enter the Key ID generated from the Dashboard
      "amount": paymentInfo.price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": paymentInfo.currency,
      "name": paymentInfo.name,
      "description": paymentInfo.description,
      "image": paymentInfo.logo,
      // "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {
        alert("Your transaction is successful")
        if(response.razorpay_payment_id) return alert(response.razorpay_payment_id);
        if(response.razorpay_order_id) return alert(response.razorpay_order_id);
        if(response.razorpay_order_id) return alert(response.razorpay_signature)
      },

      "theme": {
        "color": "#3399cc"
      }
    }

    const paymentObject = new window.Razorpay(options)

    paymentObject.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    paymentObject.open()
  }


  const calculateTotal = () => {

    const localCart = JSON.parse(localStorage.getItem('cart'))
    if (localCart.length) {
      const tot = localCart.reduce((acc, item) => acc + (item.quantity * item.price), 0)
      setTotal(tot)
    }
  }

  useEffect(() => {
    calculateTotal()

  }, [cart])


  useEffect(() => {

    dispatch(getFromCart())
    
  }, [])
  

  
  return (
    <>
      <Header />
      <h2 style={{ fontWeight: "lighter", fontSize: "40px" }}>Cart</h2>
      {
        cart.length
          ?
          cart.map(item => <CartItem key={item.id} item={item} />)
          :
          <div>Your cart is Empty!</div>
      }
      <div onClick={() => displayRazorpay()} style={{
        padding: "10px 20px",
        cursor: "pointer",
        margin: "auto 0px",
        position: "fixed",
        right: "0",
        zIndex: "1",
        background: "#f1f5f4",
        height: "50px",
        maxWidth: "250px",
        bottom: "0px",
        boxShadow: "0px 0px 6px grey",
        borderRadius: "6px"
      }}>Checkout :  ₹ {cart.length ? total.toFixed(2) : 0}
      </div>
    </>
  )
}
