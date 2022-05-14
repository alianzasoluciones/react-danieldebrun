//import logo from './logo.svg';
import './App.css';
import Menu from './components/NavBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
function App() {
  return (
    <div className="App">
      <div className='navbar'  ><Menu />
      </div>
      <ItemListContainer greeting="bienvenidos"/>
     
    </div>
  );
}

export default App;
