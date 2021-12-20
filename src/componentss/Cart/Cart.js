import React from 'react';



const Cart = (props) => {
const cart = props.cart;    
    const productPrice = cart.reduce( (total, prd)=> total + prd.price * prd.quantity, 0);
    let shipping = 0.00;
    if( productPrice > 35){
        shipping = 0.00;
    }
    else if (productPrice >15){
       shipping = 4.99
    }
    else if(productPrice > 0){
        shipping = 12.99;
    };
    const tax = productPrice / 10;
    const total = productPrice + shipping + tax;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }

    return (
        <div>
            <h3>Order Summery</h3>
            <h6>Items Ordered:{cart.length} </h6>
            <p>Product Price: {formatNumber(productPrice)}</p>
             <p><small>Shipping Cost: {formatNumber(shipping)}</small>
             <p>Tax & Vat: {formatNumber(tax)}</p>
             </p>
            <p>Total:{formatNumber(total)} </p>
            <br/>
            {
                props.children 
            }
        
        </div>
    );
};

export default Cart;