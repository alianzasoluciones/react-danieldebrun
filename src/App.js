//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <div className='navbar'  ><NavBar />
      </div>
      <ItemListContainer greeting="bienvenidos"/>
      <ItemCount stock={3} inicial= {0} />
      
    </div>
  );
}

export default App;
