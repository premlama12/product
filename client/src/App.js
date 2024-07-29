import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './components/product/Home.jsx'
import ProductList from './components/product/ProductList.jsx'
import ProductAdmin from './components/product/ProductAdmin.jsx'
import Test from './components/product/Test.jsx'
import CreateProduct from './components/product/CreateProduct.jsx'
import UpdateProduct from './components/product/UpdateProduct.jsx'
const App = () => {
  return (
    <div>
    <Router>
            <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/admin" element={<ProductAdmin/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/create" element={<CreateProduct/>}/>
      <Route path="/updateproduct/:id" element={<UpdateProduct/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App