import {useState } from 'react'
import {Link} from 'react-router-dom'

const InputCount = ({onConfirm, stock, inicial= 1}) => {
    const [count, setCount] = useState(inicial)

    const handleChange = (e) => {
        if (e.target.value <= stock) {
            setCount(e.target.value)
        }
    }
    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={ () => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}
const ButtonCount = ({onConfirm, stock, inicial= 1}) => {
    const [count, setCount] = useState(inicial)

    const sumar = ()=> {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1 ){
          setCount (count - 1)
        }
          };
    return (
        <div>
            <p>{count}</p>
            <button onClick={restar}>-</button>
            <button onClick={sumar} >+</button>
            <button  onclick={ () => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({stock, imagen,descripcion,precio , name, category}) => {
        const [inputType, setInputType]= useState('input')
        const [quantity, setQuantity] = useState(0)
        
        const ItemCount = inputType === 'input' ? InputCount : ButtonCount
        const handleOnAdd = (count) => {
            console.log('agregar al carrito')
            setQuantity (count)
        }

    return(
        <div class="card mb-3" style={{maxWidth: 540,background:'silver',textAlign:'center'}}>
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>cambiar Contador</button>
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
      { quantity > 0 ? <Link to='/cart'>Finalizar compra</Link>: <ItemCount stock={stock} onConfirm={handleOnAdd}/>} 
     <div> <Link to='/'>seguir comprando</Link> </div>
  </footer>
</div>

        
    )
}

export default ItemDetail


