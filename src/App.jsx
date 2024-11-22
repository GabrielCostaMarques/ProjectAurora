
import './App.css'

import Header from './components/Header/Header'


import { useEffect, useState } from 'react'
import { AuthProvider } from './context/authContext'
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom'


import Home from './page/Home'
import BuyCar from './page/BuyCar'
import ProductDetails from './page/ProductDetails/ProductDetails'
import SignUp from './page/SignUpForm/SignUpForm'
import ProductsSearched from './page/ProductsSearched'
import NotFound from './page/NotFound'
import Login from './page/Login/Login'
import useAuthentication from './hooks/useAuthentication'
import { onAuthStateChanged } from 'firebase/auth'
import Loader from './components/Loader/Loader';


function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()


  //segmentação para que quando o usuário estiver carregando, nada do blog carregue antes de o user receber alguma info
   const loadingUser = user ===undefined
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
      
    })
  }, [auth])

  if (loadingUser) {
    return <Loader/>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={user ? <Navigate to="/" /> : <SignUp />} />
            <Route path="/signIn" element={< Login />} />
            <Route path="/carrinho" element={!user ? <Navigate to="/" /> : <BuyCar />} />
            <Route path="/search" element={<ProductsSearched />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}



export default App