import CartItem from './CartItem';

const CartItemList = ({items, onDelete}) => {
 
     return (
             <div>
                 {items.map((item, i) => {
                     return (
                         <CartItem key= {i} item={item} onDelete= {onDelete} />
                     )
                 })}         
                
             </div>
         )  
     
}

export default CartItemList;
