
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App" style={{background:'lightblue'}}>
      <BrowserRouter>
      <div className='navbar'  ><NavBar />
      </div>
      <Routes>
      <Route path='/' element={<ItemListContainer greeting="Todos los Productos"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos que te gustaran"/>}/>
            <Route path='/descripcion/:productId' element={<ItemDetailContainer />}/>
            <Route path='/about' element={<h1>Atras</h1>}/>
            <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />

      </Routes>
      </BrowserRouter>
      
      
     
      
      
      
      
      </div>
  );
}
      
export default App;

