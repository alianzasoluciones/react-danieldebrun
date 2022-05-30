//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
/*import ItemListContainer from './components/itemListContainer/ItemListContainer';*/
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App" style={{background:'lightblue'}}>
      <div className='navbar'  ><NavBar />
     {/* <ItemListContainer  greeting="todo en audio"/>*/}
      
      </div>
      <ItemDetailContainer />
      
    </div>
  );
}
      
export default App;

