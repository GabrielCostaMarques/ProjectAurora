
import './App.css'
import BodyScreen1 from './components/BodyScreen1/BodyScreen1'
import CTALogin from './components/CTALogin/CTALogin'
import Header from './components/Header/Header'
import ProductsTable from './components/ProductsTable/ProductsTable'

import images from '../src/assets/img-export'

const URL = "http://localhost:3000/users";


function App() {
  const dataImagesSlider = [
    { id: 0, image: `${images.image1}`},
    { id: 1, image: `${images.image2}`},
    { id: 2, image: `${images.image3}`},
    
]

  return (
    <>
      <Header />
      <BodyScreen1 slides={dataImagesSlider}/>
      <CTALogin api={URL}/>
      <ProductsTable/>

    </>
  )
}



export default App