import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        // console.log("Product Api Called")
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data)
                console.log("Products received");

            });
    }, [])
    useEffect(() => {
        // console.log("Local Storage Called");
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(key, savedCart[key]);
                const addedproduct = products.find(product => product.key === key);
                if (addedproduct) {

                    const quantity = savedCart[key];
                    addedproduct.quantity = quantity;
                    storedCart.push(addedproduct);
                    // console.log(addedproduct);
                }
            }
            setCart(storedCart);
            console.log(storedCart);

        }

        // console.log(products);
    }, [products])

    const handleAddtoCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        //save to lacal storage
        addToDb(product.key);
    }
    const hanldeSearch = event => {
        const searchText = event.target.value;
        const mathchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(mathchedProducts);
        console.log(mathchedProducts.length);
    }

    return (
        <div>
            <div className="search-container">
                <input type="text"
                    placeholder='Search products'
                    onChange={hanldeSearch}
                />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddtoCart={handleAddtoCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>

    );
};

export default Shop;