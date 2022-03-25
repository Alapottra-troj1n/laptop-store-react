import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop-container'>
            <h2>Laptop <span className='primary-color'>Store</span></h2>
            
            <div className="shop">
                <div className="laptops-container">
                    <h2>Laptops</h2>
                </div>
                <div className="cart-container">
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;