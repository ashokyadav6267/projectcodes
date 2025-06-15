import { Route, Routes } from 'react-router';
import Home from '../screen/Home';
import ProductDetails from '../screen/ProductDetails';
import AddProduct from '../screen/AddProduct';
import Product from '../screen/Product';

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/details/:id' element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default MainRouter;