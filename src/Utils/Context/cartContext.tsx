import React, { useState, useEffect } from 'react';

// import { addressFormatter } from "../util";

const CartContext = React.createContext()

function CartContextProvider(props) {

    const [cartItems,setCartItems]=useState([])





    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
    {props.children}
    </CartContext.Provider>
)
}

export { CartContextProvider, CartContext }
