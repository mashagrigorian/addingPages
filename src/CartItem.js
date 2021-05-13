import { useContext } from 'react';
import {CartContext} from './CartContext';
import {useRouteMatch} from "react-router-dom";

const CartItem = () => {
    const id = useRouteMatch().params.id;
    const product = useContext(CartContext).products.find((item) => item.id === +id);
    const {addToCart} = useContext(CartContext);

    return (
        <div>
            <p>{product.name}</p>
            <p>{product.id}</p>
            <p>{product.price}</p>
            <h3>{product.description}</h3>
             <h4>{product.color}</h4>
              {!product.image && (
                 <img style= {{ width: '20%', height: '20%'}} src= '/default-thumbnail.jpg' />
                )}
              <img style= {{ width: '20%', height: '20%'}} src= {product.image} />
              <br />
              <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default CartItem;