import { useContext } from 'react';
import { useParams } from 'react-router'
import { myContextProduct } from '../context/productContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { Product } = useContext(myContextProduct)

  const detailsProduct = Product.find((item) => item.id === (id));
  

  return (
    <>
    <div className=' h-120 w-100 p-7 border-2 m-10 flex flex-col gap-4 items-center' > 
      <img className='h-60'  src={detailsProduct.imageUrl} alt="" />
      <h1> Name:- {detailsProduct.productName}</h1>
      <p>Description :-{detailsProduct.description}</p>
      <h1>Price:-{detailsProduct.price}</h1>
      <h1>Color :- {detailsProduct.color}</h1>

    </div>
      <h1 className='font-bold text-2xl text-red-900' >Product Details page </h1>
    </>
  )
}

export default ProductDetails