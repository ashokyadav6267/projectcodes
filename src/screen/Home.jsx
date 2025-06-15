import { useContext, useMemo, useState } from 'react'
import CardComponent from '../components/CardComponent'
import { myContextProduct } from '../context/productContext'
import { useNavigate } from 'react-router';

const Home = () => {
  const { Product } = useContext(myContextProduct);
  const [filterablevalue, setFilterablevalue] = useState("all")
  const navigate = useNavigate();

  const filtersProdect = useMemo(() => {
    if (filterablevalue == "all") return Product;
    return Product.filter((val) => val.brand.toLowerCase() === filterablevalue.toLowerCase())
  }, [filterablevalue, Product])

  return (
    <>
      <div className=' h-16 w-35 rounded-lg ml-330 text-3xl p-3 border-none text-black bg-gray-500 mt-10'>
        <select
          onChange={(e) => setFilterablevalue(e.target.value)}
          value={filterablevalue}
          name="brand" id="">
          <option value="all">All</option>
          <option value="xisoami">xiaomi</option>
          <option value="apple">iphone</option>
          <option value="vivo">vivo</option>
          <option value="realme">realme</option>
        </select>
      </div>
      <div className='h-screen w-screen flex pt-5 mt-5'    >
        {filtersProdect.map((val) => (
          <div key={val.id} >
            <div key={val.id} className=' h-100 w-70  m-7 flex items-center justify-center flex-col rounded-lg p-5 bg-gray-500  '
              onClick={() => navigate(`/details/${val.id}`)} >
              <div key={val.id} >
                <CardComponent
                  brand={val.brand}
                  imageUrl={val.imageUrl}
                  productName={val.productName}
                  price={val.price}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home