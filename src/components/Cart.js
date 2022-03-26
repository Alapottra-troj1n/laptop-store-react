import React from 'react';
import './Cart.css'
import OnCartItem from './OnCartItem';


const Cart = ({onCart, setOnCart}) => {
   
    let grandTotal = 0;

    for(let laptop of onCart){
        grandTotal += laptop.price;
    }
    //reset function
    const resetHandler = () => {
        setOnCart([]);
    }
    

    return (
        <div className="cart">
            <div className="cart-details">
            <div className="selected-laptops">
            <h5>Choose 4 Laptops : </h5>
            {onCart.map(laptop => <OnCartItem laptop={laptop} /> )}
            </div>
            <h4>Total Price : {grandTotal} </h4>
            </div>
            <div className="cart-actions">
                <button className="choose-for-me">Choose For Me</button>
                <button className='reset-cart' onClick={resetHandler}>Reset Cart</button>
            </div>
        </div>
    );
};

export default Cart;