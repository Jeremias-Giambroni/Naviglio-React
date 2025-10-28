import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Form } from './components/Form/Form'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import { CartProvider } from './context/CartContext/CartProvider';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>
            <Header/>
            <Routes>

              <Route path="/" element={<ItemListContainer/>}/>

              <Route path="/detail/:id" element={<ItemDetailContainer/>}/>

              <Route path="/contacto" element={<Form/>} /> 

              <Route path='/carrito' element={<h1>Carrito</h1>}/>

            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
