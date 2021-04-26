import React, { useState, useEffect } from "react";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";
import CartFooter from "./CartFooter";
import "./App.css";
import HashLoader from "react-spinners/HashLoader";

function Cart() {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    async function datas() {
        const datas =  await fetch("././MOCK_DATA.json");
        datas.json().then(result => setTimeout(() => {
            setItems(result)
        }, 1000));
    }
        useEffect(() => {
        datas();
    }, []);

    const onDelete = (id) => {
    let delItem = items.filter(item => {
        return item.id !== id
    });
    setItems(delItem);
    }

    if(!items) {
        return <HashLoader size={50} color={"#36D7B7"} loading={loading} />
    }

    return (
        <div className="App">
            <CartHeader/>
            {items.length === 0 && (<p>No items in cart.</p>) }
            <CartItemList
                items={items}
                onDelete={onDelete}
            />
            <CartFooter items={items}/> 
            </div>
            )
            }

export default Cart;