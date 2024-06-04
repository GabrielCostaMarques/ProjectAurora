
import './App.css'

import Header from './components/Header/Header'



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import BuyCar from './page/BuyCar'
import ProductSingle from './page/ProductSingle'
import LoginForm from './page/LoginForm'
import ProductsSearched from './page/ProductsSearched'

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/carrinho" element={<BuyCar />} />
          <Route path="/search" element={<ProductsSearched />} />
          <Route path="/products/:id" element={<ProductSingle/>} />
        </Routes>
      </BrowserRouter>



    </>
  )
}



export default App