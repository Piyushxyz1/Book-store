import React, { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import BookContent from './components/book-content/BookContent';
import { ToastContainer } from 'react-toastify';
import Cart from './pages/Cart';
import { useNavigate } from 'react-router-dom';
import { setCartItems } from './reduxStore/cartSlice';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { useEffect } from 'react';
import axios from 'axios';
import CategoryPage from './pages/booksbycategory/CategoryPage';
import { toast } from "react-toastify";
import { addToCart as addToCartRedux } from "../src/reduxStore/cartSlice";
import ScrollToTop from './components/ScrollToTop';
import PaymentSuccess from './pages/paymentverificationpages/PaymentSuccess';
import PaymentFailed from './pages/paymentverificationpages/PaymentFailed';
import OurStory from './pages/about/OurStory';


const App = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch()
  const url = import.meta.env.VITE_API_URL || "http://localhost:4000";

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };



const addToCart = async (product) => {
  try {
    const response = await axios.post(
      `${url}/api/cart/add`,
      {
        itemId: product.id,
        productName: product.name,
        price: product.price,
      },
      {
        headers: {
          token: token,
        },
      }
    );

    if (response.data.success) {
      toast.success(response.data.message, {
        toastId: "cart-success",
      });

      dispatch(addToCartRedux(product));
    } else {
      toast.error("Please login or create an account to add items to the cart");
    }
  } catch (error) {
    console.log(error);

    if (error.response?.status === 401 || error.response?.status === 403) {
      toast.error("Please login or create an account to add items to the cart");
    } else {
      toast.error("Unable to add item to cart");
    }
  }
};





  const getCartItem = async () => {


    const response = await axios.post(`${url}/api/cart/get`, {}, {
      headers: {
        token: token
      }
    })
    console.log(response.data)

    dispatch(
      setCartItems(response.data.cartData)
    );

  }
  useEffect(() => {
    getCartItem()
  }, [])


  return (
    <div>
      
      <Navbar
        token={token} onLogout={onLogout} navigate={navigate} url={url}
      />
      <Routes>
        <Route path='/' element={!token ? <Welcome />: <Navigate to={"/home"}/>} />
        <Route path='/home' element={token ? <Home addToCart={addToCart} /> : <Navigate to={'/'} />} />
        <Route path='/cart' element={token ? <Cart token={token} url={url} /> : <Navigate to="/" />} />
        <Route path='/book/:id' element={<BookContent />} />
        <Route path='/category/:categoryName' element={<CategoryPage addToCart={addToCart} />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/failure" element={<PaymentFailed />} />
        <Route path="/about" element={<OurStory />} />
      </Routes>
      <ScrollToTop />
    </div>
  )
}

export default App