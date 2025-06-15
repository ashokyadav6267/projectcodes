import { useContext } from 'react';
import { useParams } from 'react-router'
import { myContextProduct } from '../context/productContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { Product } = useContext(myContextProduct)

  const detailsProduct = Product.find((item) => item.id === Number(id));

  return (
    <>
      <div className='h-screen w-screen '>
        <div className=' h-120 w-100 p-7 bg-white rounded-lg m-10 flex flex-col gap-4 items-center' >
          <img className='' src={detailsProduct.imageUrl} alt="" />
          <h1> Name :- {detailsProduct.productName}</h1>
          <p>Description :- {detailsProduct.description}</p>
          <h1>Price :- {detailsProduct.price}</h1>
          <h1>Color :- {detailsProduct.color}</h1>
        </div>
      </div>
    </>
  )
}

export default ProductDetails