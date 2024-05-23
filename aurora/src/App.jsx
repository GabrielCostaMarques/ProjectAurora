
import './App.css'
import BodyScreen1 from './components/BodyScreen1/BodyScreen1'
import CTALogin from './components/CTALogin/CTALogin'
import Header from './components/Header/Header'
import ProductsTable from './components/ProductsTable/ProductsTable'

import images from '../src/assets/img-export'



function App() {
  const dataImagesSlider = [
    { id: 0, image: `${images.image1}`},
    { id: 1, image: `${images.image2}`},
    { id: 2, image: `${images.image3}`},
    
]

  const data = [
    {name: "Bolsa",price: 300,image: `${images.bag}`,oferta: "teste"},
    {name: "Bolsa",price: 30,image: `${images.bag}`,oferta: "teste"},
    {name: "tenis",price: 400,image: `${images.bag}`,oferta: "teste"},
    {name: "Bolsa",price: 30,image: `${images.bag}`,oferta: "teste"},
]

  return (
    <>
      <Header />
      <BodyScreen1 slides={dataImagesSlider}/>
      <CTALogin />
      <ProductsTable products={data}/>

    </>
  )
}



export default App