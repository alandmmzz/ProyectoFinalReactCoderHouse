import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Checkout from './Components/Checkout/Checkout'
import Cart from './Components/Cart/Cart'

export default function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={
              <ItemListContainer greeting="Próximamente, los accesorios más flama los encontrás acá."/>
            } />
            <Route exact path="/category/:categoryId" element={
              <ItemListContainer greeting="Próximamente, los accesorios más flama los encontrás acá."/>
            } />
            <Route exact path="/item/:itemId" element={
              <ItemDetailContainer/>
            } />
            <Route exact path="/cart" element={
              <Cart/>
            } />
            <Route exact path="/checkout" element={
              <Checkout/>
            } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}