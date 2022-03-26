import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OnCartItem.css'

const OnCartItem = ({laptop, onCart, setOnCart}) => {
    const cartItemDelete = () => {
        const newItems = onCart.filter(item => item.id !== laptop.id);
        setOnCart(newItems);
    }

    return (
        <div className='on-cart-item'>
            <div className="img"><img src={laptop.image} alt="" /></div>
            <div className="selected-details">
                <h3 className="selected-product-name">{laptop.name}</h3>
                <p className='selected-product-price'>Price: {laptop.price}</p>
            </div>
            <div className="delete">
                <FontAwesomeIcon onClick={cartItemDelete} className="delete-btn" icon={faTrashCan}/>
            </div>
        </div>
    );
};

export default OnCartItem;