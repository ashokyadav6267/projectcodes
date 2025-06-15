
const CardComponent = ({ productName, brand, price, imageUrl }) => {

  return (
    <>
      <div >
        <div>
          <div className='flex items-center justify-center' >
            <h1 className='mb-4' >Brand :-  <span className='text-red-600' >{brand}</span> </h1>
          </div>
          <img className='h-50 ' src={imageUrl} alt="" />
        </div>
        <h1 className='mt-5 '>Product Name :- {productName}</h1>
        <h1 className='text-white' >Price :- {price}</h1>
      </div>
    </>
  )
}

export default CardComponent;