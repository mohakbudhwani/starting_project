import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/cart-provider";

function App() {

  const[CartShown,setCartShown]=useState(false)
  
  const ShowCartHandler=()=>{
    setCartShown(true)
  }

  const CloseCartHandler=()=>{
    setCartShown(false)
  }  

  return (
      <CartProvider>
        {CartShown && <Cart onClose={CloseCartHandler}/>}
        <Header onShowCart={ShowCartHandler}/>
        <main>
          <Meals/>
        </main>
      </CartProvider>
      
  );
}

export default App;
