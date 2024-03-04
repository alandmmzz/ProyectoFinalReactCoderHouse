import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({children}) {

    const [cart, setCart] = useState([])

    function isInCart(id) {
        const result = cart.find((item) => item.id == id)
        return (
            result == undefined? false : true
        )
    }

    function removeItem(id) {
        const result = cart.find((item) => item.id == id);
        setCart(cart.splice(cart.indexOf(result), 1))
    }

    function addItem(item, quantity) {
        if (isInCart(item.id)) {
            removeItem(item.id);
            setCart([...cart, {...item, quantity}])
        } else {
            setCart([...cart, {...item, quantity}]);
        }
    }

    return <CartContext.Provider value={{cart, addItem, removeItem, isInCart}}>{children}</CartContext.Provider>
}