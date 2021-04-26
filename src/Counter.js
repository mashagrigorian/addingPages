import React, { useState } from "react";

function Counter({item}) {
    
    const [count, setCount] = useState({
        count: item.quantity
    });

    const summary = count.count * Number(item.price.split('$').join(''));

    function decrementCount() {
        setCount({count: count.count - 1})
    }

    function incrementCount() {
        setCount({count: count.count + 1})
    }
    

    return (
        <>
        <button onClick={decrementCount}>-</button>
        <span>{count.count}</span>
        <button onClick={incrementCount}>+</button>
        <p>$ {summary}</p>
        </>
    )
}

export default Counter;