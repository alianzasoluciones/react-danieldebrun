
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './CartContext/CartContext';
import { NotificationProvider } from './Notificaciones/Notificacion'

function App() {
  return (
    <div className="App" style={{background:'pink', color:'red', fontSize:20,itemAlign:'center'}}>
      <CartContextProvider>
      <NotificationProvider>
      <BrowserRouter>
      
      <div className='navbar' style={{background:'red'}}  ><NavBar />
      </div>
      <Routes>
      <Route path='/' element={<ItemListContainer greeting="Todos los Productos"/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/>
              <Route path='/descripcion/:productId' element={<ItemDetailContainer />}/>
              <Route path='/about' element={<h1>Atras</h1>}/>
              <Route path='/cart' element={<Cart />}/>
            <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />

      </Routes>
      </BrowserRouter>
      </NotificationProvider>
      </CartContextProvider>
      
     
      </div>
  );
}
      
export default App;


