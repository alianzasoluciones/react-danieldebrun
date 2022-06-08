import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../CartContext/CartContext'

const ItemDetail = ({ id, name, imagen, category, descripcion, precio, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantity(quantity)

        addItem({ id, name, precio, quantity })
    }

    return (
        <div class="card mb-3" style={{maxWidth: 540,background:'silver',textAlign:'center'}}>
       
<div class="row g-0">
<div class="col-md-4">
  <img img src={imagen} class="img-fluid rounded-start" alt="{name}"/>
  </div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">{category}</h5>
    <p class="card-text">{name}</p>
    <p class="card-text">{descripcion}</p>
    <p class="card-text"><small class="text-muted">{precio}</small></p>
  </div>
</div>
</div>
<footer style={{textAlign:'center'}}>
{ quantity > 0  
  ? <Link to='/cart' className='Option'>Finalizar compra</Link> 
  : <ItemCount stock={stock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>} 
<div> <Link to='/'>seguir comprando</Link> </div>
</footer>
</div>
    )
}

export default ItemDetail


