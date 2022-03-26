import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ShopItem.css'

const ShopItem = ({laptop,onCart, setOnCart}) => {

    const addToCartHandler = () => {
        if(onCart.length < 4){
            setOnCart([...onCart, laptop]);
        }else{
            alert('Already Selected 4 Items'); 
        }
        
    }

    return (
        <div className="shop-item">
            <div className="img-container">
                <img src={laptop.image} alt="" />
            </div>
            <div className="details">
                <p className="name">{laptop.name}</p>
                <p className="price">{laptop.price} BDT</p>
            </div>
            <div className="footer">
                <button onClick={addToCartHandler} >Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
            </div>
        </div>
    );
};

export default ShopItem;