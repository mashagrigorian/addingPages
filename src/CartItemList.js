import CartItem from './CartItem';

const CartItemList = ({items, onDelete}) => {
 
     return (
             <div>
                 {items.map((item) => {
                     return (
                         <CartItem key= {item.id} item={item} onDelete= {onDelete} />
                     )
                 })}         
                
             </div>
         )  
     
}

export default CartItemList;
