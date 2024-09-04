import React from "react";
import mealsimage from "../../assests/meals.jpg";
import classes from "./Header.module.css";

const Header=(props)=>{
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsimage} alt="A Table full of Food" />
            </div>
        </React.Fragment>
    )
}
export default Header