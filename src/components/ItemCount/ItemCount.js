import  { useState } from 'react'



const ItemCount = ({stock , inicial , onAdd}) => {
  const [count, setCount] = useState(inicial)
     
  const resta = () => {
    if (count > 1 ){
      setCount (count - 1)
    }
      };

 
const agrega = () => {
  if (stock > count){
     setCount (count + 1)
 } 
};
const AgregarTotal = () => {
  onAdd (count)
};

 return(
    <div class="container-fluid">
    <div class="d-grid gap-2 d-md-block">
    <button onClick={resta} class="btn btn-primary" type="button" >-</button>
    <label style={{position:"flex", display:"inline",padding:10}}>{count}</label>
    <button onClick={agrega} class="btn btn-primary" type="button">+</button>
    
      <button onClick={AgregarTotal}>Agregar al carrito</button>
  </div>
  </div>
  )
}
export default ItemCount
  
  