
import './App.css'
import BodyScreen1 from './components/BodyScreen1/BodyScreen1'
import CTALogin from './components/CTALogin/CTALogin'
import Header from './components/Header/Header'
import ProductsTable from './components/ProductsTable/ProductsTable'

function App() {


  return (
    <>
      <Header/>
      <BodyScreen1/>
      <ProductsTable/>
      <CTALogin/>
      <ProductsTable/>
    </>
  )
}

export default App