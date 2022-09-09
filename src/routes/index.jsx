import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import Private from '../components/Protected/Private'
import ProtectedRoute from '../components/Protected/_ProtectedRoute'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetail from '../pages/Products/ProductDetail'
import AddToDo from '../pages/Todo'

const Router = () => {
   const { isAuth, user } = useSelector(state => state.user);
   const loggedIn = JSON.parse(sessionStorage.getItem('user'))
   //console.log("route========>", isAuth, 'loggedIn==>',loggedIn);
   return (
      <>
         <Routes>

            <Route path="/" element={isAuth ? <Home /> : <Navigate to="/auth/login" />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/product-detail/:productId" element={<ProductDetail />} />

            {/* Protected route start here*/}
            <Route path="/todo" element={<Private><AddToDo /></Private>} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<h2>Not found</h2>} />

         </Routes>

      </>
   )
}

export default Router