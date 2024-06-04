
import './App.css'

import Header from './components/Header/Header'



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import BuyCar from './page/BuyCar'
import ProductSingle from './page/ProductSingle'

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<BuyCar />} />
          <Route path="/products/:id" element={<ProductSingle/>} />
        </Routes>
      </BrowserRouter>



    </>
  )
}



export default App