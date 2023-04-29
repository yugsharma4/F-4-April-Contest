import React from 'react';
import { addToCart,removeFromCart } from '../actions'
import { useDispatch } from 'react-redux';



const ProductsContainer = ({prodData}) => {

    const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
    return (
        <div className='products-container'>
        {

            prodData.map((item)=>{
            return <div className='product-card'>
            <img src={item.thumbnail} alt="image" />
            <div className='info-div'>
                <div>Title: {item.title}</div>
                <div>Price: ${item.price}</div>
            </div>
            <button onClick={(e)=>{handleAddToCart(item); e.target.innerHTML = "Added to Cart"}}>Add To Cart</button>

            </div>
        }) }
        </div>

    )
}

export default ProductsContainer;
