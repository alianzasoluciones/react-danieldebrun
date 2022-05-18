import  { useState } from 'react'

const ItemCount = () => {
  const [count, setCount] = useState(0)
     
  const decrement = () => {
          setCount((count) => count -1 )
      }

 
const increment = () => {
    
     setCount (count + 1)
 }
 

 return(
    <div class="container-fluid">
    <div class="d-grid gap-2 d-md-block">
    <button onClick={decrement} class="btn btn-primary" type="button" >-</button>
    <h2 style={{position:"flex", display:"inline",padding:10}}>{count}</h2>
    <button onClick={increment} class="btn btn-primary" type="button">+</button>
  </div>
  </div>
  )
}
export default ItemCount
  
  