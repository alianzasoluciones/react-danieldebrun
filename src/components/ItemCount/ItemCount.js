import  { useState } from 'react'

const ItemCount = () => {
  const [count, setCount] = useState(1)
     
  const decrement = () => {
    if (count <= 0 ){
      setCount (1)
    } else {
      setCount (count - 1)
    }
    
          setCount((count) => count - 0 )
      }

 
const increment = () => {
  if (count === 4 ){
    setCount (1)
  } else {
    setCount (count + 0)
    
     setCount (count + 1)
 }
}

 return(
    <div class="container-fluid">
    <div class="d-grid gap-2 d-md-block">
    <button onClick={decrement} class="btn btn-primary" type="button" >-</button>
    <h2 style={{position:"flex", display:"inline",padding:10}}>{count}</h2>
    <h3>{ count <= 3 ? "tenemos stock" : "no tenemos stock" 
      } </h3>
    <button onClick={increment} class="btn btn-primary" type="button">+</button>
  </div>
  </div>
  )
}
export default ItemCount
  
  