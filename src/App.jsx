import logo from './images/carrito.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider, { CartContext } from './context/cartContext';




function App() {

  console.log("hola mundo");
console.log(CartContext);
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element = { <ItemListContainer /> } />
            <Route path="/category/:id" element = { <ItemListContainer /> } />                        
            <Route path="/detail/:id" element = { <ItemDetailContainer /> } />
            <Route path="/cart" element = { <Cart /> } />

            <Route path="/*" element = { <Navigate to='/' replace  /> } />

          </Routes>

        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
