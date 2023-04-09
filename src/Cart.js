import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom'

import items from "./11_2_21_selected_products.json"

function Cart() {
    const [cartTotal, setCartTotal] = useState(0);
    const location = useLocation()

    const cartFromProps = location.state?.cart;
    console.log(location);

    const cartItems = cartFromProps.map((el) => (
        <div key={el.id}>
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
                        ${el.price} <span class="close">&#10005;</span>{howManyofThis(el.id)}
                    </div>
                </div>
            </div>
        </div>
    ));

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cartFromProps.length; i++) {
            totalVal += cartFromProps[i].price;
        }
        setCartTotal(totalVal);
    };

    function howManyofThis(id) {
        let hmot = cartFromProps.filter((cartItem) => cartItem.id === id);
        return hmot.length;
    }

    return (
        <div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col">
                                <h4>
                                    <b>Checkout Cart</b>
                                </h4>
                            </div>
                            <div class="col align-self-center text-right text-muted">
                                Products in Cart {cartFromProps.length}
                            </div>
                        </div>
                    </div>
                    <div>{cartItems}</div>
                    <div>
                        <Link to="/" state={{ cart: cartFromProps }}>
                            <button>
                            Return
                            </button>
                        </Link>
                        <Link to="/Confirmation" state={{ cart: cartFromProps }}>
                            <button>
                            Order
                            </button>
                        </Link>
                    </div>
                    <div>
                        <p class="mb-0 me-5 d-flex align-items-center">
                            <span class="small text-muted me-2">Order total:</span>
                            <span class="lead fw-normal">${cartTotal}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cart;

