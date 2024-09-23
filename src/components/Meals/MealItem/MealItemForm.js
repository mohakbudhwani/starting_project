import { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"
import CartContext from "../../../Store/cart-context";

const MealItemForm=(props)=>{
    const ctx=useContext(CartContext)
    const AddItemToCart=(event)=>{
        event.preventDefault();
        const quantity=document.getElementById("amount_"+props.id).value
        ctx.addItem({...props.item,quantity:quantity})
        console.log(ctx)
    }
    return(
        <form className={classes.form}>
            {console.log(ctx)}
            <Input label="Amount" input={{
                id:"amount_"+props.id,
                type:"number",
                min:1,
                max:5,
                defaultValue:1
            }}/>
            <button onClick={AddItemToCart}>+Add</button>
        </form>
    )
}

export default MealItemForm;