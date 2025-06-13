import React from 'react'

const CardComponent = ({ productName, price, imageUrl }) => {


    
  return (
    <>
    <div >
       <div>
        <img className='h-50 '  src={imageUrl} alt="" />
       </div>
       <h1 className='mt-5 text-green-900'>Product Name :- {productName}</h1>
       <h1>Price :- {price}</h1>
        
    </div>
    </>
  )
}

export default CardComponent;