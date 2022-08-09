import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../pages/Products/ProductDetail'
import AddToDo from '../pages/Todo'

const Router = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/product-detail/:productId" element={<ProductDetail/>} />
           <Route path="/todo" element={<AddToDo/>} />

        </Routes>
        
     </>
  )
}

export default Router