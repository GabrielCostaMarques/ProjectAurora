
import './App.css'
import images from './assets/imges-export'
import BodyScreen1 from './components/BodyScreen1/BodyScreen1'
import CTALogin from './components/CTALogin/CTALogin'
import Header from './components/Header/Header'
import ProductsTable from './components/ProductsTable/ProductsTable'

function App() {

  return (
    <>
      <Header/>
      <BodyScreen1/>
      <ProductsTable name="Bolsa Azul" price={300} image={images.image4} oferta={false}/>

      <CTALogin/>
      <ProductsTable name="Bolsa Preta" price={30} image={images.image4} oferta={true}/>
    </>
  )
}

export default App
