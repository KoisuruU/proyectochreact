import { createContext, useContext, useState } from "react"; 

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        setCartList( [
            ...cartList,
            item
        ] )
    }

    // const removeItem =(id) =>

    const emptyCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            emptyCart
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider