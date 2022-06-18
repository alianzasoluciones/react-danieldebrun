import { useContext } from 'react'
import CartContext from '../../CartContext/CartContext'


const CartItem = ({ id, name, quantity, precio }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article class= 'fluid'>
            <header >
                <h2 >
                    {name}
                </h2>
            </header>
            <section >
                <p >
                    Cantidad: {quantity}
                </p>
                <p >
                    Precio x Unidad: ${precio}
                </p>
            </section>           
            <footer >
                 <p >
                     Subtotal: ${precio * quantity}
                 </p>
                 <button onClick={() => handleRemove(id)}>vaciar carro</button>
            </footer>
        </article>
    )
}

export default CartItem