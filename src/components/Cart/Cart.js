import React,{useContext} from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"
import CartContext from "../../Store/cart-context";


const Cart=(props)=>{
    const cartctx=useContext(CartContext);
    const cartitems=<ul className={classes["cart-items"]}>{cartctx.items.map((item)=>(
    <li>
        Name:{item.name} Price:{item.price} Quaantity:{item.quantity}
    </li>
))}
    </ul>

    return (
    <Modal onClose={props.onClose}>
        <div className={classes['cart-items']}>{cartitems}</div>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
            
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes['button']}>Order</button>
        </div>
    </Modal>
)
};

export default Cart;