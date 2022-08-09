import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../redux/actions/product-actions";


// main component
const ProductComponent = () => {

  const dispatch = useDispatch();
  let { products } = useSelector(state => state.getProducts); // destructure
  //const { products } = allProducts;
  const { title, image, price, description } = products
  console.log("API store data from redux thunk===>:", products)
  // get product details from redux action
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {
        products.length === 0 ? 'Loading...': 
        products.map((item) => {
          return (
            <div className="four wide column" key={item.id} >
              <Link to={`/product-detail/${item.id}`}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={item.image} alt="hello" />
                    </div>
                    <div className="content">
                      <div className="header">{item.title}</div>
                      <div className="meta price">$ {item.price}</div>
                      <div className="meta">{item.category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })
      }

    </>

  )
};

export default ProductComponent;
