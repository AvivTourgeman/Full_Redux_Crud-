import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductsAsync, selectProducts, getProductAsync,updateProductsAsync } from './ProductSlice';
import { buyAsync } from './cartSlice'
import MiniCart from './MiniCart';

const MyShop = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    const [price, setprice] = useState(0)
    const [desc, setdesc] = useState("")
    const [amount, setamount] = useState(1)
    useEffect(() => {
        dispatch(getProductAsync())
    }, [])


    return (
        <div >
            <h3>MyShop</h3>  <MiniCart />
            <hr></hr>
            add a product:<br></br>
            desc: <input onChange={(e) => setdesc(e.target.value)} />
            price: <input onChange={(e) => setprice(e.target.value)} />

            <button onClick={() => dispatch(addProductsAsync(
                {
                    desc: desc,
                    price: price
                }
            ))}>add</button>
            <hr></hr>
            <div style={{ backgroundColor: 'pink' }}>
                number of items in my shop: {products.length}<br ></br>

                amount:<input type={"number"} value={amount} onChange={(e) => setamount(e.target.value)} style={{ maxWidth: "40px" }} />
            </div>
            {products.map((prod, i) => <div key={i}> product: {prod.desc}{' - '}price: {prod.price} <button onClick={() => dispatch(buyAsync({ desc: prod.desc, price: prod.price, amount: amount }

            ))}>buy</button>

                <button onClick={() => dispatch(updateProductsAsync({ desc:desc ,price:price ,id:prod.id }

                ))}>update</button>

            </div>)}


            <hr></hr>

        </div>
    )
}

export default MyShop