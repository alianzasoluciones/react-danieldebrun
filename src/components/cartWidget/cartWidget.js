
import { useContext } from 'react'
import CartContext from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        < Link to='/cart' > 
            <img src='./images/carrito2_.jpg' style={
    {
    width: 35, height: 35, display:"inline-block", alignItems: "flex-end", padding:5
  }} alt="card-widget"  /> 
           {quantity}
            
        </Link>
    )
}

export default CartWidget