import {CartContext} from './CartContext'
import {Link} from 'react-router-dom';
import * as React from "react";

const CartItemList = () => {
    const {products, addToCart} = React.useContext(CartContext);
     return (
        <div>
            {products.map(product => {
                return (
                    <div key={product.id}>
                         <Link to={`/ProductList/${product.id}`}>
                         {!product.image && (
                                    <img src='/default-thumbnail.jpg' style={{height: '150px'}}/>
                                )}
                                <img src={product.image} alt=""/>

                         </Link>
                         <h3>{product.name}</h3>
                         <button onClick={() => addToCart(product)}>Add to cart</button>
                         </div>
                )
            }) }
        </div>
         )  
     
}

export default CartItemList;
