// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const{getTotalCarAmount}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
         <p className="title">Delivery Information</p>
         <div className="multi-fields">

          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name'/>
         </div>
         <input type="email" placeholder='Email address' />
         <input type="text" placeholder='Street' />
         <div className="multi-fields">

         <input type="text" placeholder='City' />
         <input type="text" placeholder='State'/>
         </div>
         <div className="multi-fields">

         <input type="text" placeholder='Zip code' />
         <input type="text" placeholder='Country'/>
         </div>
         <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2> Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCarAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCarAmount()===0?0:10}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCarAmount()===0?0:getTotalCarAmount()+10}</b>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
         </div>

      </div>
    </form>
  )
}

export default PlaceOrder