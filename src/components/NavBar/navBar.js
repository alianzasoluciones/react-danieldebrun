import React from "react"; 
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
<nav class="navbar  navbar-expand-lg  navbar-light bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="./prueba">React</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./prueba">Respuestos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./prueba">Partes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./prueba">Modelos</a>
        </li>
        
        
        
      </ul>
    </div>
     
  </div>
  
  <div class="form-control me-2"> <CartWidget  /></div>
  
</nav>

    );
}

export default NavBar