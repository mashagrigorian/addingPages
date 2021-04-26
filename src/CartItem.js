import {VscTrash} from 'react-icons/vsc';
import Counter from "./Counter"
const CartItem = ({item, onDelete}) => {

    return (
        <div>
            <p>{item.name}</p>
             <h4>{item.color}</h4>
              <Counter item= {item} />
              <VscTrash onClick= {() => {
                  onDelete(item.id)
              }} />
              {!item.image && (
                 <img style= {{ width: '20%', height: '20%'}} src= '/default-thumbnail.jpg' />
                )}
              <img style= {{ width: '20%', height: '20%'}} src= {item.image} />
        
        </div>
    )
}

export default CartItem;