import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({children}) {

    const [cart, setCart] = useState([])

    function addItem(item, quantity) {
        setCart([...cart, {...item, quantity}])
    }

    return <CartContext.Provider value={[cart, addItem]}>{children}</CartContext.Provider>
}