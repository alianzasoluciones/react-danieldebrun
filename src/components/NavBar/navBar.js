 
import { Link,  } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link to={'/'}>
     <h2>Todo accesorios</h2>
  </Link>
    <Link to='/category/audio'>Radio</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/category/llantas'>Llantas</Link>
        </li>
        <li class="nav-item">
          <Link to='/category/Cubiertas'>Cubiertas</Link>
        </li>
        <li class="nav-item">
          <Link to='/atras'>Atras</Link>
        </li>
      
        
      </ul>
  <div className="form-control me-2"> <CartWidget  /></div>
    </div>
     
  </div>
  
  
</nav>

    )
}

export default NavBar