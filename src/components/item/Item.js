import React from "react"
const Item = ({id, name, precio,}) => {
    return (
        <div key={id} class="card" style={{width: 150, display:'inline'}}>
  <img src="{img}" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{precio}</p>
    
  </div>
</div>
)}

export default Item