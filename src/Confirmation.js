//The
import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom'

const Confirmation = () => {
    const [cartTotal, setCartTotal] = useState(0);
    const location = useLocation()

    const cartFromProps = location.state?.cart;

    useEffect(() => {
        total();
    }, [cartFromProps]);

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

    return (
        <div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col">
                                <h4>
                                    <b>Please Confirm</b>
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
                                Finish and back to Browse
                            </button>
                        </Link>
                    </div>
                    <div>
                        <p class="mb-0 me-5 d-flex align-items-center">
                            <span class="small text-muted me-2">Order total:</span>
                            <span class="lead fw-normal">${cartTotal} + $1.50 Tax = ${cartTotal + 1.5} Total </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;