
import './App.css'
import BodyScreen1 from './components/BodyScreen1/BodyScreen1'
import CTALogin from './components/CTALogin/CTALogin'
import Header from './components/Header/Header'
import ProductsTable from './components/ProductsTable/ProductsTable'


import bag from "./assets/imges-export"

function App() {

  const data = [{
    name: "Bolsa",
    price: 30,
    image: `${bag.image4}`,
    oferta: "teste"
  },

  {
    name: "Bolsa",
    price: 30,
    image: `${bag.image4}`,
    oferta: "teste"
  },

  {
    name: "Bolsa",
    price: 30,
    image: `${bag.image4}`,
    oferta: "teste"
  }]

  return (
    <>
      <Header />
      <BodyScreen1 />
      <CTALogin />
      <ProductsTable products={data}/>

    </>
  )
}



export default App