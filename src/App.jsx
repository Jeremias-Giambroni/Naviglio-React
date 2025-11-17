import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Form } from './components/Form/Form'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './components/Cart/Cart';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer';
import { AuthProvider } from './context/AuthContext/AuthProvider';
import { MainLayout } from './layouts/MainLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { Login } from './components/Login/Login';
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida';


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <div>
              <Routes>
                <Route element={<MainLayout/>}>

                  <Route path="/" element={<ItemListContainer/>}/>

                  <Route path='/category/:category' element={<ItemListContainer/>}/>

                  <Route path="/detail/:id" element={<ItemDetailContainer/>}/>

                  <Route path="/contacto" element={<Form/>} /> 

                  <Route path='/carrito' element={<Cart/>}/>
                </Route>

                <Route path='/admin' element={<AdminLayout/>}>
                  <Route index element={<Login/>}/>

                  <Route 
                    path='alta-productos' 
                    element ={
                      <RutaProtegida>
                        <ProductFormContainer/>
                      </RutaProtegida>
                    }
                  />
                </Route>
                {/* <Route path='/admin' element={<ProductFormContainer/>}/> */}

              </Routes>
            </div>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
