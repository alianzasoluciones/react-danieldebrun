import { Link } from "react-router-dom"


const Item = ({id, name, precio, imagen, descripcion}) => {
  
    return (
       
      <div  key={id} class="card"  style={{width: '18rem'}}>
      <img src={imagen} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <h6 class="card-title">{precio}</h6>
        <p class="card-text">{descripcion}</p>
        <a href="p" class="btn btn-primary">comprar</a>
      </div>
      <Link to={`/descripcion/${id}`}>ver descripcion</Link>
    </div>
    
  

)}

export default Item

