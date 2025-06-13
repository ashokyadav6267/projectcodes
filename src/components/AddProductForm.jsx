import { useContext, useState } from 'react'
import useFormHook from '../hooks/useFormHook';
import { myContextProduct } from '../context/productContext';
import { toast } from 'react-toastify';

const AddProductForm = () => {

  const { AddProduct } = useContext(myContextProduct)

  const { data, handlechange, resetForm } = useFormHook({
    productName: "",
    id: "",
    brand: "",
    description: "",
    color: "",
    price: 0,
    imageUrl: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    AddProduct(data);
    toast.success("Product Add successfully")
    resetForm();
  }

  return (
    <>
      <div>
        <form className='p-10 w-240 flex flex-col items-center justify-center bg-gray-300 ' onSubmit={handlesubmit} >
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="ProductName">Product Name</label>
            <input
              id='ProductName'
              name='productName'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="text"
              onChange={handlechange}
              value={data.productName}
              placeholder='product name' />
          </div>
           <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="id">id</label>
            <input
              id='id'
              name='id'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="number"
              onChange={handlechange}
              value={data.id}
              placeholder='Id' />
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="brand">brand</label>
            <input
              id='brand'
              name='brand'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="text"
              onChange={handlechange}
              value={data.drand}
              placeholder='Brand' />
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="">Description</label>
            <input
              id='Description'
              name='description'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="text"
              onChange={handlechange}
              value={data.description}
              placeholder='description' />
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="Color">Color</label>
            <input
              id='Color'
              name='color'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="text"
              onChange={handlechange}
              value={data.color}
              placeholder='color' />
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="Price">Price</label>
            <input
              id='Price'
              name='price'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="number"
              onChange={handlechange}
              value={data.price}
              placeholder='price' />
          </div>
          <div className='flex flex-col'>
            <label className='text-2xl' htmlFor="Image">Image</label>
            <input
              id='Image'
              name='imageUrl'
              className='border-2 border-blue-900 w-200 h-15 p-5 rounded-lg mt-4'
              type="url"
              onChange={handlechange}
              value={data.imageUrl}
              placeholder='Url' />
          </div>
          <button className='text-white border-2 px-10 py-4 text-2xl rounded-lg mt-5 bg-red-800' >Create</button>
        </form>
      </div>
    </>
  )
}

export default AddProductForm;