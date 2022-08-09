import React from 'react'
import Header from '../components/Header'
import Header1 from '../components/Header/Header1'
import ProductComponent from '../components/Product'
import ProductListing from './Products/ProductListing'

const Home = () => {
  return (
     <>
        {/* <Header /> */}
        <Header1 />
        <ProductListing />
     </>
  )
}

export default Home