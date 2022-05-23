import React from "react"
const Item = ({id, name, precio,}) => {
    return (
        <div key={id} class="card" style={{width: 50}}>
  <img src="{img}" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{precio}</p>
    <a href="jj" class="btn btn-primary">Agregar</a>
  </div>
</div>
)}

export default Item