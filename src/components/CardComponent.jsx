import React from 'react'

const CardComponent = ({ productName, id, brand, description, color, price, imageUrl }) => {


    
  return (
    <>
    <div >
       <div>
        <img className='h-50 '  src={imageUrl} alt="" />
       </div>
       <h1>{brand}</h1>
       <h1 className='mt-5 text-green-900'>{productName}</h1>
       <h1>{id}</h1>
       <p>{description}</p>
       <h1>{color}</h1>
       <h1>{price}</h1>
        {/* <button className='bg-red-700 px-6 py-4 rounded-lg mt-2' >Delete Product</button> */}
    </div>
    </>
  )
}

export default CardComponent;