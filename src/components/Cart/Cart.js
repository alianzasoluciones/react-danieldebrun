import { useContext } from "react"
import CartContext from "../../CartContext/CartContext"
import Formulario from "../../Form/Formulario"
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

    const ordenCompras = () => {
        console.log('ordenCompras');
    }


    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div style={{ display: 'wrap'}}>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button onClick={ordenCompras}>Generar Orden</button>
            <Formulario />
        </div>
    )
}

export default Cart
