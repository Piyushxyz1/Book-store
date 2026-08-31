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

const App = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const dispatch = useDispatch()
const url = import.meta.env.VITE_API_URL;

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
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
      <ToastContainer />
      <Navbar 
        token={token} onLogout={onLogout} navigate={navigate}
      />
      <Routes>
        <Route
          path="/"
          element={
            !token?<Welcome />: <Navigate to = "/home"/>
          }
        />
        <Route
          path="/home"
          element= { <Home token={token} />} 
        />

        <Route path='/cart' element={token ? <Cart token={token}/> : <Navigate to="/"  />} />
       <Route path="/book/:bookId" element={<BookContent />} />
      </Routes>
    </div>
  )
}

export default App