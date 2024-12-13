// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const{cartItems, food_list, removeFromCart,getTotalCarAmount,url}=useContext(StoreContext)
  const navigate=useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index)=>{
           if(cartItems[item._id]>0){
            return (
              // eslint-disable-next-line react/jsx-key
              <div>
              <div className='cart-items-title cart-items-item'> 
                    <img src={url+"/images/"+item.image} alt="" />
                     <p>{item.name}</p>
                     <p>${item.price}</p>
                     <p>{cartItems[item._id]}</p>
                     <p>${item.price*cartItems[item._id]}</p>
                     <p onClick={()=>removeFromCart(item._id)}  className='cross'>x</p>
                     
              </div>
              <hr />
              </div>
            )
           }
        })}
      </div>
      <div className="cart-bottom">
         <div className="cart-total">
          <h2> Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCarAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{getTotalCarAmount()===0?0:10}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCarAmount()===0?0:getTotalCarAmount()+10}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
         </div>
         <div className="cart-promocode">
          <div>
            <p>If you have a promo code , Enter it here</p>
             <div className="cart-promcode-input">
              <input type="text" placeholder='promocode' />
              <button>Submit</button>
             </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Cart
