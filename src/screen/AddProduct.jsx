import React from 'react'
import AddProductForm from '../components/AddProductForm';

const AddProduct = () => {
  return (
    <>
      <div className='pt-5 pl-10  h-full w-full p-10 bg-gray-300' >
        <h1 className='text-blue-900 text-3xl font-bold ' >Add Your Product</h1>
        <AddProductForm />
      </div>
      <h1 className='font-bold text-2xl text-red-900' > Add Product Page </h1>
    </>
  )
}

export default AddProduct;