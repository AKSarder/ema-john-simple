import React from 'react';
import './Cart.css';

const Cart = (props) => {


    const { cart } = props;

    // reduce function
    // const totalReducer = (previous, product) => previous + product.price;
    // console.log(cart);
    // const total = cart.reduce(totalReducer, 0);

    let total = 0;
    let toatalQuantity = 0;
    for (const product of cart) {
        // console.log(product);
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        toatalQuantity = toatalQuantity + product.quantity;
        // console.log(toatalQuantity);
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = (total + shipping + tax);

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered:{toatalQuantity}</h5>
            <br />
            <p>Total Price :{total.toFixed(2)}</p>
            <p>Shipping :{shipping.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>




        </div>
    );
};

export default Cart;