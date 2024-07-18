
import './App.css'

import Header from './components/Header/Header'


import { useEffect, useState } from 'react'
import { AuthProvider } from './context/authContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './page/Home'
import BuyCar from './page/BuyCar'
import ProductSingle from './page/ProductSingle'
import LoginForm from './page/LoginForm/LoginForm'
import ProductsSearched from './page/ProductsSearched'
import NotFound from './page/NotFound'
import Teste from './page/Teste'
// import { useCreateUser } from './hooks/useAuthentication'
// import { onAuthStateChanged } from 'firebase/auth'
import { getAuth } from "firebase/auth"; 

function App() {
  // const [user, setUser] = useState(null)
  // const {auth} = useCreateUser()

  // const loadingUser=user===undefined
  // useEffect(()=>{
  //   onAuthStateChanged(auth,(user)=>{ 
  //     setUser(user)
  //   })
  // },[auth])

  // if (loadingUser) {
  //   return <p>Carregando...</p>
  // }]

  const auth = getAuth();
  const user = auth.currentUser;
  
  if (user) {
    <p>not found</p>
  } else {
    // No user is signed in.
  }



  return (
    <>
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/carrinho" element={<BuyCar />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="/search" element={<ProductsSearched />} />
            <Route path="/products/:id" element={<ProductSingle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>




    </>
  )
}



export default App