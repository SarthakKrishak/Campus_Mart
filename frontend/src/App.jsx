import React from 'react'
import Home from './Pages/Home'
import ProductDescription from './Pages/ProductDescription'
import { BrowserRouter, Routes, Route } from "react-router";
import ProductListing from './Pages/ProductListing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/product" element={<ProductDescription/> } />
        <Route path="/upload" element={<ProductListing/> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App