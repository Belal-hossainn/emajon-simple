import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import thanksImage from '../../images/giphy.gif';
import { clearTheCart, deleteFromDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
 
const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false)
    const handlePlaceOrder = ()=> {
        setCart([]);
        setOrderPlaced(true);
        clearTheCart();
    }
    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd=> pd.key !== productKey);
        setCart(newCart);
        deleteFromDb(productKey)
    }
    useEffect(()=>{
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts =productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts)
    }, []);

    let thankYou;
    if(orderPlaced){
        
     thankYou = <img src={thanksImage} alt=''/>

    };
    return (
        <div className="shop-container">
            <div className="products-container">
            {
                cart.map(pd => <ReviewItem
                    key={pd.key} 
                    removeProduct = {removeProduct}
                     product={pd}></ReviewItem>)
            }
            {thankYou}
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                   <button onClick={handlePlaceOrder} className="cart-btn"> Place Order </button>
               </Cart>
            </div>
        </div>
    );
};

export default Review;