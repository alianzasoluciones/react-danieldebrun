import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const agregar = () => {
       if(quantity < stock) {
           setQuantity(quantity +1)
       }
   }

   const restar = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div >          
            <div >
                <button  onClick={restar}>-</button>
                <h4 >{quantity}</h4>
                <button  onClick={agregar}>+</button>
            </div>
            <div>
                <button  onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount