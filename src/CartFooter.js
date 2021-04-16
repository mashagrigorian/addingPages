function CartFooter({items}) {
    const footerResult = items.reduce((a, b) => a = a + b.price,0);

    return (
    <div>
        <div> Subtotal: </div>
        <div>
            $ {footerResult}
        </div>
        <button>Checkout</button>
    </div>
    )
}
 
export default CartFooter;