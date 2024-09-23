import React,{ useState } from "react";
import CartContext from "./cart-context";


const CartProvider=(props)=>{
    const [items,setItems] =useState([])
    
    const AddItemToCartHandler=(item)=>{
        setItems([...items,item])
    }

    const RemoveItemFromCartHandler=(id)=>{}

    const cartcontext={
        items:items,
        totalAmount:0,
        addItem:AddItemToCartHandler,
        removeItem:RemoveItemFromCartHandler
    }
    return <CartContext.Provider value={cartcontext}>
        {console.log(cartcontext)}
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;