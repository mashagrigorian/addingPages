import {useState} from "react";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";
import CartFooter from "./CartFooter";

const Cart = () => {

    const [items, setItems] = useState(
        { 
            items: [       
            {
                id: Math.random(),
                name: "Blender",
                quantity: 1,
                color: "Black",
                price: 1400,
                image: "https://www.shop.philips.ru/media/catalog/product/cache/19/thumbnail/450x450/163b81649b7ef7bc8a00b0066e59ae0a/h/r/hr3571_90_image_08.jpg"
             },
             { 
                id: Math.random(),
                 name: "Blanket",
                 quantity: 1,
                 color: "Red", 
                 price: 200,
                 image: "https://cdn-mw.niceshops.com/upload/image/product/large/default/zoeppritz-blanket-soft-fleece-strawberry-763992-en.jpg"
             }     
        ], 
            subtotal: 0},)


const onDelete = (id) => {
    let delItem = items.items.filter(item => {
        return item.id !== id
    });
    setItems({
        items: delItem
    });
}

return (
    <div>
        <CartHeader/>
        <CartItemList
            items={items.items}
            onDelete={onDelete}
        />
        <CartFooter items={items.items}/>
    </div>
)
}

export default Cart;