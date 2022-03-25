import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-details">
            <h2>Selected Items : </h2>
            <h2>Total Price :</h2>
            </div>
            <div className="cart-actions">
                <button>Choose For Me</button>
                <button>Reset Cart</button>
            </div>
        </div>
    );
};

export default Cart;