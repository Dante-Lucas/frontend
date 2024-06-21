import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './pages/registration/Register'
import { Login } from './pages/registration/Login'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Produtos } from './pages/produto/Produtos'
import { Home } from './pages/produto/Home'
import { AddProduct } from './pages/produto/AddProduct'
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
            {/* Feed receberá o path do DefaultLayout (no caso "/") mais o path do Feed, portanto será "/" + "/feed" */}
          <Route path='/home' element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/produto' element={<Produtos />} />
          <Route path="/add" element={<AddProduct />} />
        </Route>
      </Routes>      
    </BrowserRouter>
  )
}
