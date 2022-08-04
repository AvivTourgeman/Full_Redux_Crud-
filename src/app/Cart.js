
import React, { useState, useEffect } from 'react';
import { selectCart, getcartAsync,removeProdAsync } from "./cartSlice";
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
  const myCart = useSelector(selectCart);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getcartAsync())
  }, [])
  return (
    <div>
    
      <div style={{ backgroundColor: 'pink' }}>Cart {myCart.map((order, ind) => <div key={ind}>price:{order.price} {" - "}  desc:{order.desc} amount:{order.amount}
      <button onClick={()=> dispatch(removeProdAsync(order.id))} >remove</button>
      </div>)}</div>
   
    <button> check out</button>
   
    </div>
  )
}

export default Cart