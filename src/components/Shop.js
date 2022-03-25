import React from 'react';
import Cart from './Cart';
import './Shop.css'
import ShopItem from './ShopItem';

const Shop = ({data}) => {
    return (
        <div className='shop-container'>
            <h2>Laptop <span className='primary-color'>Store</span></h2>
            
            <div className="shop">
                <div className="laptops-container">
                    <h2>Laptops</h2>
                    <div className="laptops">
                        {data.map(laptop => <ShopItem laptop={laptop} />)}
                    </div>
                </div>
                
                <div className="cart-container">
                    <h2>Cart</h2>
                    <Cart/>
                </div>
            </div>
        </div>
    );
};

export default Shop;