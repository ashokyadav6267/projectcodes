import React, { useContext } from 'react'
import CardComponent from '../components/CardComponent'
import { myContextProduct } from '../context/productContext'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Home = () => {
  const { Product, setProduct } = useContext(myContextProduct);
  const navigate = useNavigate();



  const deletehandler = (id) => {
   const filterProduct = Product.filter((val) =>val.id !== id)
   setProduct(filterProduct);
   toast.success("delete successfully")
  }

  return (
    <>

    <div>
      <select name="" id="">
        <option value="all">All</option>
        <option value="xisoami">xisoami</option>
        <option value="apple">apple</option>
        <option value="vivo">vivo</option>
        <option value="realme">realme</option>
      </select>
    </div>


      <div className=' h-140 w-70  m-7 flex items-center justify-center flex-col border-2 rounded-lg p-5 bg-gray-400'  >
        <div   >
          {Product?.map((val) => (
            <div key={val.id} onClick={() => navigate(`/details/${val.id}`)} >
              <CardComponent imageUrl={val.imageUrl} productName={val.productName} id={val.id} brand={val.brand} color={val.color} price={val.price} description={val.description} />
            </div>
          ))};
          <button onClick={deletehandler}  className='bg-red-700 px-6 py-4 rounded-lg mt-2' >Delete Product</button>
        </div>
      </div>
      <h1 className='font-bold text-2xl text-red-900' >Home page </h1>
    </>
  )
}

export default Home