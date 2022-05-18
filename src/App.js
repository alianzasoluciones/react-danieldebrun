//import logo from './logo.svg';
import './App.css';
import Menu from './components/NavBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <div className='navbar'  ><Menu />
      </div>
      <ItemListContainer greeting="bienvenidos"/>
      <ItemCount />
      
    </div>
  );
}

export default App;
