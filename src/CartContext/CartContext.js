import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                   return prod 
                }
            })
            setCart(newCart)
        }
    }
    
    const getQuantity = () => {
        let acce = 0
        cart.forEach(prod => {
          acce += prod.quantity
        })
    
        return acce
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.precio
        })
        
        return total
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{ cart, addItem, getQuantity, getProduct, removeItem, getTotal, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext