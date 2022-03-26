import React from 'react';
import './Cart.css'
import OnCartItem from './OnCartItem';
import { v4 as uuidv4 } from "uuid";



const Cart = ({onCart, setOnCart, data}) => {
   
    let grandTotal = 0;

    for(let laptop of onCart){
        grandTotal += laptop.price;
    }
    //reset function
    const resetHandler = () => {
        setOnCart([]);
    }
    //choose one for me function
    const randomPicker = () => {
        const randomNumber = Math.floor(Math.random() * 9 );
        if(onCart.length < 4){
            setOnCart([...onCart, data[randomNumber]])
        }else{
            alert('Already Selected 4 Items');
        }
        
    }
    

    return (
        <div className="cart">
            <div className="cart-details">
            <div className="selected-laptops">
            <h5>Choose 4 Laptops : </h5>
            {onCart.map(laptop => <OnCartItem key={uuidv4()} laptop={laptop} /> )}
            </div>
            <h4>Total Price : {grandTotal} </h4>
            </div>
            <div className="cart-actions">
                <button className="choose-for-me" onClick={randomPicker}>Random Picker</button>
                <button className='reset-cart' onClick={resetHandler}>Reset Cart</button>
            </div>
        </div>
    );
};

export default Cart;