import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch, } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header1 from '../../components/Header/Header1'
// main components
const ProductDetail = () => {

   const { productId } = useParams();

   return (
      <>
         <Header1 />
         <div className='main__container container'>
            <div className="four wide column"  >
               <div className="ui link cards">
                  <div className="card">
                     <div className="image">
                        <img src='' alt='t' />
                     </div>
                     <div className="content">
                        <div className="header">title</div>
                        <div className="meta price">$909</div>
                        <div className="meta">IT</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
};

export default ProductDetail