import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {name, price, img, stock, seller, key }= props.product;
    return (
        <div className="product-container">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
            <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link></h4>
            <small>by {seller}</small>
            <h5>${price}</h5>
            <p>Only {stock} left in stock - order soon</p>
           { props.showAddToCart && <button className="cart-btn" onClick={()=> props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>}

            </div>
        </div>
    );
};

export default Product;