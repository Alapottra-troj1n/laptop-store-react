import React from 'react';
import './ShopItem.css'

const ShopItem = ({laptop}) => {
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
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default ShopItem;