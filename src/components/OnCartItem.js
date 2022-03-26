import React from 'react';
import './OnCartItem.css'

const OnCartItem = ({laptop}) => {
    return (
        <div className='on-cart-item'>
            <div className="img"><img src={laptop.image} alt="" /></div>
            <div className="selected-details">
                <h3 className="selected-product-name">{laptop.name}</h3>
                <p className='selected-product-price'>Price: {laptop.price}</p>
            </div>
        </div>
    );
};

export default OnCartItem;