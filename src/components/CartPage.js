import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {removeFromCart } from '../actions';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
      };

      const totalAmount = cartItems.reduce((total, item) => total + item.price, 0)
    return (
        
        <div className='products-cart-container'>
        <h1>My Cart</h1>
        <div className='parallel-div'>
        <div className='prod-container-div'>
        {cartItems.map((item)=>{
            return(  <div className='product-card'>
                <img src={item.thumbnail} alt='image'></img>
                <div className='info-div'>
                    <div>Title: {item.title}</div>
                    <div>Price: ${item.price}</div>
                </div>
                <button onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Cart</button>
            </div>
            
            )

            
            
        })}
        </div>
        <div className='amount-div'>

        <div className='checkout-div'>
            {cartItems.map((item)=>{
                return (
                    <div className='amount-info'>
                    <div>{item.title}</div>
                    <div>$ {item.price}</div>
                    </div>
                )
            })}
        </div>

        <div className='total-div'>
        <div className='total-div-1'>
            <div>Total Amount</div>
            <div>$ {totalAmount}</div>
            </div>
            <button>Click To Checkout</button>
        </div>
        </div>
        </div>

        </div>
    )
}
export default Cart;
