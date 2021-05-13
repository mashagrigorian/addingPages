import React, {useEffect, useState} from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  async function datas() {
    const datas =  await fetch("././product_list.json");
    datas.json().then(result => setTimeout(() => {
      setProducts(result)
    }, 1000));
}
    useEffect(() => {
    datas();
}, []);
const onDelete = (id) => {
  let delItem = cart.filter(item => {
      return item.id !== id
  });
  setCart(delItem);
}


const addToCart = (product) => {
    setCart([...cart, product])
}

 return <CartContext.Provider
        value={{products, cart, addToCart, onDelete}}>
        {children}
    </CartContext.Provider>
}
export {CartContext, CartProvider}
