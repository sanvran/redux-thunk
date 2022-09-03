import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch, } from 'react-redux'
import {getProductById} from '../../redux/actions/product-actions'
import { useParams } from 'react-router-dom'
import Header1 from '../../components/Header/Header1'

// main components
const ProductDetail = () => {

   const {product} = useSelector(state => state.selectProduct)
   console.log("ss", product)
   const { productId } = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
   if(productId && productId !== '') dispatch(getProductById(productId)) 
   }, [dispatch])
   
   console.log("id", productId)

   return (
      <>
         <Header1 />
         {
            product ? (<div className='main__container container'>
            <div className="four wide column"  >
               <div className="ui link cards">
                  <div className="card">
                     <div className="image">
                        <img src={product.image} alt='t' />
                     </div>
                     <div className="content">
                        <div className="header">{product.title}</div>
                        <div className="meta price">${ product.price}</div>
                        <div className="meta"> {product.category} </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>) : ('Loading')
         }
      </>
   )
};

export default ProductDetail