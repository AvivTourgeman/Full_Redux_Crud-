
import React, { useState, useEffect } from 'react';
import { selectCart} from "./cartSlice";
import { useSelector } from 'react-redux';
import Cart from './Cart';



const MiniCart = () => {
    const myCart = useSelector(selectCart);
    return (
    <div style={{ backgroundColor: 'peachpuff' }}>

        items in cart:{myCart.length}
    </div>
  )
}

export default MiniCart