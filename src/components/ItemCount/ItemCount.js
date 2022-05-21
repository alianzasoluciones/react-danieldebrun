import  { useState } from 'react'

const ItemCount = (props) => {
  const [count, setCount] = useState(parseInt(props.inicial))
     
  const resta = () => {
    if ((count <= props.stock, +1 )&& (count > props.inicial)){
      setCount (count - 1)
    }
      }

 
const agrega = () => {
  if ((count>= 0 )&& (count <= props.stock)){
     setCount (count + 1)
 }
}

 return(
    <div class="container-fluid">
    <div class="d-grid gap-2 d-md-block">
    <button onClick={resta} class="btn btn-primary" type="button" >-</button>
    <h2 style={{position:"flex", display:"inline",padding:10}}>{count}</h2>
    <button onClick={agrega} class="btn btn-primary" type="button">+</button>
    <h3>{ count <= 3 ? "tenemos stock" : "no tenemos stock" 
      } </h3>
  </div>
  </div>
  )
}
export default ItemCount
  
  