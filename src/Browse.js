import React, { useState, useEffect } from "react";
import {
    Link
}
    from 'react-router-dom';
import items from "./11_2_21_selected_products.json"

const Browse = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        total();
    }, [cart]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };


    const addToCart = (el) => {
        setCart([...cart, el]);
    };

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    };


    function howManyofThis(id) {
        let hmot = cart.filter((cartItem) => cartItem.id === id);
        return hmot.length;
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = items.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase());
    });


    const listItems = filteredItems.map((el) => (
        // PRODUCT
        <div class="row border-top border-bottom" key={el.id}>
            <div class="row main align-items-center">
                <div class="col-2">
                    <img class="img-fluid" src={el.image} />
                </div>
                <div class="col">
                    <div class="row text-muted">{el.title}</div>
                    <div class="row">{el.category}</div>
                    
                    
                </div>
                <div class="col">
                    <button type="button" variant="light" onClick={() => removeFromCart(el)} > - </button>{" "}
                    <button type="button" variant="light" onClick={() => addToCart(el)}> + </button>
                </div>
                <div class="col">
                    ${el.price} <span class="close">&#10005;</span>{howManyofThis(el.id)}
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <h1><center>Very legitimate Turtle Store <span class="small text-muted me-2">(CS 319)</span></center></h1>
            <div class="card">
                <div class="row">
                    {/* HERE, IT IS THE SHOPING CART */}
                    <div class="col-md-8 cart">
                        <div class="title">
                            <div class="row">
                                <div class="col">
                                    <h4>
                                        <b>Turtle Shopping Cart</b>
                                    </h4>
                                </div>
                                <div class="col align-self-center text-right text-muted">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />

                                    Products selected {cart.length}
                                </div>
                            </div>
                        </div>
                        <div>{listItems}</div>
                    </div>
                    <div>
                        <Link to="/Cart" state={{ cart: cart }}>
                            <button>
                                Checkout
                            </button>
                        </Link>
                    </div>
                    <div class="float-end">
                        <p class="mb-0 me-5 d-flex align-items-center">
                            <span class="small text-muted me-2">Order total:</span>
                            <span class="lead fw-normal">${cartTotal}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Browse;