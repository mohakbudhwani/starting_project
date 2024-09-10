import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const[CartShown,setCartShown]=useState(false)
  
  const ShowCartHandler=()=>{
    setCartShown(true)
  }

  const CloseCartHandler=()=>{
    setCartShown(false)
  }  

  return (
      <React.Fragment>
        {CartShown && <Cart onClose={CloseCartHandler}/>}
        <Header onShowCart={ShowCartHandler}/>
        <main>
          <Meals/>
        </main>
      </React.Fragment>
      
  );
}

export default App;
