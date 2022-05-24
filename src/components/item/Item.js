import React from "react"


const Item = ({id, name, precio, img}) => {
  
    return (
        <div key={id}  style={{ display:'inline',}}>
  <img  src={img} style={{width: 220,height:130, display:'inline',border:'double silver ' }}  alt="..."></img>
  <div>
    <h5 >{name}</h5>
    <p >{precio}</p>
    
    
    
  </div>
</div>
)}

export default Item