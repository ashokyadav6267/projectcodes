import React, { useContext, useMemo, useState } from 'react'
import CardComponent from '../components/CardComponent'
import { myContextProduct } from '../context/productContext'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Home = () => {
  const { Product, setProduct } = useContext(myContextProduct);
  const [filterablevalue, setFilterablevalue] = useState("all")
  const navigate = useNavigate();

  const filtersProdect = useMemo(() => {
    if (filterablevalue == "all") return Product;
    return Product.filter((val) => val.brand.toLowerCase() === filterablevalue.toLowerCase())
  }, [filterablevalue])

  const deletehandler = (id) => {
    const filterProduct = Product.filter((val) => val.id !== id);
    setProduct(filterProduct);
    toast.success("delete successfully");
    setFilterablevalue("all");
  }

  return (
    <>
      <div>
        <select
          onChange={(e) => setFilterablevalue(e.target.value)}
          value={filterablevalue}
          name="brand" id="">
          <option value="all">All</option>
          <option value="xisoami">xisoami</option>
          <option value="apple">apple</option>
          <option value="vivo">vivo</option>
          <option value="realme">realme</option>
        </select>
      </div>
      <div className='h-screen w-screen flex' >
        {filtersProdect.map((val) => (
          <div key={val.id} className=' h-100 w-70  m-7 flex items-center justify-center flex-col border-2 rounded-lg p-5 bg-gray-300'
            onClick={() => navigate(`/details/${val.id}`)} >
            <div >
              <CardComponent
                imageUrl={val.imageUrl}
                productName={val.productName}
                price={val.price}
              />
            </div>
            <button
              onClick={() => deletehandler(val.id)}
              className='bg-red-700 px-6 py-4 rounded-lg mt-2'
            >
              Delete Product
            </button>
          </div>
        ))}
      </div>
      <h1 className='font-bold text-2xl text-red-900' >Home page </h1>
    </>
  )
}

export default Home