import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../screen/Home';
import ProductDetails from '../screen/ProductDetails';
import AddProduct from '../screen/AddProduct';

const MainRouter = () => {
  return (
  <>
    <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/productdetails' element= {<ProductDetails/>} />
        <Route path='/addproduct' element= {<AddProduct/>} />
    </Routes>
  </>
  )
}

export default MainRouter;