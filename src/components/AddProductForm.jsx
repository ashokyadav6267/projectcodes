import { useContext, useState } from 'react'

import useFormHook from '../hooks/useFormHook';
import { myContextProduct } from '../context/productContext';

const AddProductForm = () => {

  const {AddProduct} = useContext(myContextProduct)

  const { Data, handlechange, resetForm } = useFormHook({
    productName: "",
    description: "",
    color: "",
    price: 0,
    imageUrl: "",
  });

  const handlesubmit = (e) =>{
    e.preventDefault();
    AddProduct(Data);
    resetForm();
  }

  return (
    <>
      <div>
        <form className='p-10 w-240 flex flex-col items-center justify-center bg-gray-300 ' action=""  onSubmit={handlesubmit}>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="ProductName">Product Name</label>
            <input
              id='ProductName'
              name='ProductName'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="text"
              onChange={handlechange}
              value={Data.productName}
              placeholder='product name' />
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="">Description</label>
            <input
              id='Description'
              name='Description'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="text"
              onChange={handlechange}
              value={Data.description}
              placeholder='description' />
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="Color">Color</label>
            <input
              id='Color'
              name='Color'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="text"
              onChange={handlechange}
              value={Data.color}
              placeholder='color' />
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="Price">Price</label>
            <input
              id='Price'
              name='Price'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="number"
              onChange={handlechange}
              value={Data.price}
              placeholder='price' />
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="Image">Image</label>
            <input
              id='Image'
              name='ImageUrl'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="text"
              onChange={handlechange}
              value={Data.imageUrl}
              placeholder='Url' />
          </div>
          <button className='text-white border-2 px-10 py-4 text-2xl rounded-lg mt-5 bg-red-800' >Create</button>
        </form>
      </div>
    </>
  )
}

export default AddProductForm;