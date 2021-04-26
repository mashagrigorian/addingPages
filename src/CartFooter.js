function CartFooter({items}) {

    const priceResult = () =>
    items.reduce((total, currentValue) => {
        let sum = Number(currentValue.price.split('$').join(''));
        return total + currentValue.quantity * sum
    }, 0)

    return (
    <div>
        <div> Subtotal: </div>
        <div>
            $ {priceResult(items)}
        </div>
        <button>Checkout</button>
    </div>
    )
}
 
export default CartFooter;