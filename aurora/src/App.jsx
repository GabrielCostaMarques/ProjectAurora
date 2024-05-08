<<<<<<< HEAD
import Header from "./components/header";
import './App.css';

function App() {
  return (
    <>
      <Header/>
=======

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
>>>>>>> 00a3f28e8a20a1bbd4900be1c8d669367578e609
    </>
  )
}

export default App
