import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetail from '../pages/Products/ProductDetail'
import AddToDo from '../pages/Todo'

const Router = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/auth/login" element={<Login />} />
           <Route path="/product-detail/:productId" element={<ProductDetail/>} />
           <Route path="/todo" element={<AddToDo/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="*" element={<h2>Not found</h2>} />

        </Routes>
        
     </>
  )
}

export default Router