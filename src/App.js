//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemDetail from './components/ItemDetailContainer/ItemDetail';


function App() {
  return (
    <div className="App" style={{background:'lightblue'}}>
      <div className='navbar'  ><NavBar />
      </div>
      <ItemDetail/>
      
    </div>
  );
}
      
export default App;

