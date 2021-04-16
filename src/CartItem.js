
import {VscTrash} from 'react-icons/vsc';
const CartItem = ({item, onDelete}) => {

    return (
        <div>
            <p>{item.name}</p>
             <h4>{item.color}</h4>
              <h5>{item.price}</h5>
              <h6>{item.quantity}</h6>
              <VscTrash onClick= {() => {
                  onDelete(item.id)
              }} />
              <img style= {{  width: '20%' , height: '20%'}} src= {item.image} />
        
    </div>
    )
}

export default CartItem;