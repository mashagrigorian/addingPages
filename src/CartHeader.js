import {Link} from "react-router-dom";

const CartHeader = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/ProductList">Product List</Link>
                <Link to="/CartPage">Cart Page</Link>
            </div>
        </nav> 
    )
}

export default CartHeader;