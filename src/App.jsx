import logo from './images/carrito.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';





function App() {

  console.log("hola mundo");

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  />
    </div>
  );
}

export default App;
