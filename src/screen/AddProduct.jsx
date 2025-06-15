import AddProductForm from '../components/AddProductForm';

const AddProduct = () => {
  return (
    <>
      <div className='pt-5 pl-10  h-full w-full p-10 ' >
        <h1 className='text-blue-900 text-3xl font-bold ' >Add Your Product</h1>
        <AddProductForm />
      </div>
    </>
  )
}

export default AddProduct;