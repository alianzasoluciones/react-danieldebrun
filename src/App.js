//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <div className='navbar'  ><NavBar />
      </div>
      <ItemListContainer />
      
      
    </div>
  );
}

export default App;
