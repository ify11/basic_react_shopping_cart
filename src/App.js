import React from 'react'
import Main from './pages/Main'
import Home from './pages/Home';
import Cart from './pages/Cart'
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login'; 
import Error from './pages/Error';
import { DataProvider } from './components/context/DataContext';
import { AuthProvider } from './components/context/AuthContext';
import RequireAuth from './components/RequireAuth';

const App = () => {

  return (
    <DataProvider>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Main/>}>
          
        <Route element={<RequireAuth/>}>
            <Route path='/'    element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Route>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
          
              
        </Route>
      </Routes>
    
      </AuthProvider>
    </DataProvider>
  )
}

export default App