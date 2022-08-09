import React, {useEffect} from "react"
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { getProducts } from "../../redux/actions/product-actions";


// main component
const ProductComponent = () => {

  const dispatch = useDispatch();
// get product details from redux action
  useEffect(() => { 
    dispatch(getProducts());
  }, [dispatch]);
  
  return (
    <>
      <div className="four wide column" >
        <Link to={`/product-detail/`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src='' alt="hello" />
              </div>
              <div className="content">
                <div className="header">"hello"</div>
                <div className="meta price">$ ttt</div>
                <div className="meta">IT</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>

  )
};

export default ProductComponent;
