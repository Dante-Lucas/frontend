import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './pages/registration/Register'
import { Login } from './pages/registration/Login'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ProdutosLayout } from './layouts/ProdutosLayout'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {/* Feed receberá o path do DefaultLayout (no caso "/") mais o path do Feed, portanto será "/" + "/feed" */}
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Route>
      </Routes>
      <Routes path='/produto'>
        <Route path='/adicionar_produto' element={<ProdutosLayout />}/>
      </Routes>
    </BrowserRouter>
  )
}
