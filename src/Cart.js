import React from "react";
import "./App.css";
import {CartContext} from './CartContext'
import { useContext } from 'react';


function Cart() {
    const {cart, onDelete} = useContext(CartContext);


    return (

        <div>
            {cart.length ===0 && (
                <div>Your cart is empty</div>
                
            )}
            {
                cart && cart.map(cartItem => {
                        return (
                            <div key={cartItem.id}>
                                <h2>Product Name:{cartItem.name}</h2>
                                <p>Product Price:{cartItem.price}</p>
                                <p>Product Color:{cartItem.color}</p>
                                <p>Product Description:{cartItem.description}</p>
                                {!cartItem.image && (
                                    <img src='/default-thumbnail.jpg' style={{height: '150px'}}/>
                                )}
                                <img src={cartItem.image} alt=""/><br />
                                <button onClick={() => {
                                onDelete(cartItem.id);
                            }}>Delete</button>
                            </div>
                        )
                    })
                }
        </div>
    )}
            

export default Cart;