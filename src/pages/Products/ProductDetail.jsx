import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch, } from 'react-redux'
import { getProductById, removeSelectedProduct } from '../../redux/actions/product-actions'
import { useParams } from 'react-router-dom'
import Header1 from '../../components/Header/Header1'
import Loader from '../../components/Loader'
import Header from '../../components/Header'

// main components
const ProductDetail = () => {

   const product = useSelector(state => state.product)
   console.log("useselector data===>", product)
   const { productId } = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      if (productId && productId !== '') dispatch(getProductById(productId));
      return () => {
         dispatch(removeSelectedProduct());
      };
   }, [dispatch])

   // console.log("id", productId)

   // Product card detail componenets
   const ProductCardDetail = () => {
      const { image, title, price, category, description } = product;
      return (
         <div className="ui segment">
            <div className="ui two column stackable center aligned grid">
               <div className="ui vertical divider">AND</div>
               <div className="middle aligned row">
                  <div className="column lp">
                     <img className="ui fluid image" src={image} alt={title} />
                  </div>
                  <div className="column rp">
                     <h1>{title}</h1>
                     <h2 className="ui teal tag label">${price}</h2>
                     <h3 className="ui brown block header">{category}</h3>
                     <p>{description}</p>
                     <div className="ui vertical animated button" tabIndex="0">
                        
                        <div class="ui labeled button" tabindex="0">
                           <div class="ui red button">
                           <i className="shop icon"></i> Add to Cart
                           </div>
                           <a class="ui basic red left pointing label">
                              $ {price}
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      )
   };

   return (
      <>
         <Header/>
         <div className='main__container container'>
            {
               Object.keys(product).length === 0 ? (
                  <Loader />
               ) : (
                  <ProductCardDetail />
               )
            }
         </div>
      </>
   )
};

export default ProductDetail