import React, { useState } from 'react';
import Cart from './Cart';
import './Shop.css'
import ShopItem from './ShopItem';

const Shop = ({data}) => {

    const [onCart, setOnCart] = useState([]);



    return (
        <div className='shop-container'>
            <h2>Laptop <span className='primary-color'>Store</span></h2>
            
            <div className="shop">
                <div className="laptops-container">
                    <h2>Laptops</h2>
                    <div className="laptops">
                        {data.map(laptop => <ShopItem key={laptop.id} laptop={laptop} onCart={onCart} setOnCart={setOnCart} />)}
                    </div>
                </div>
                
                <div className="cart-container">
                    <h2>Cart</h2>
                    <Cart onCart={onCart} data={data} setOnCart={setOnCart}/>
                </div>
            </div>
        </div>
    );
};

export default Shop;