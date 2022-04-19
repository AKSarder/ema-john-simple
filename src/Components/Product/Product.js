import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const CartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props);
    const { name, img, price, stock, seller } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small> by:{seller}</small></p>
                <p>price: ${price}</p>
                <p><small>only {stock} left in the stock-order soon</small></p>

                <Rating
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    fractions={2}

                >

                </Rating>
                <br />
                <button
                    onClick={() => props.handleAddtoCart(props.product)}
                    className='btn-regular'>{CartIcon}Add to cart</button>
            </div>


        </div>
    );
};

export default Product;