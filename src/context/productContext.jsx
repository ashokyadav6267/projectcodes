import React, { createContext, useState } from 'react'

export const myContextProduct = createContext();

const MyProductContext = (props) => {
    const [Product, setProduct] = useState([])

        const AddProduct = (data) =>{
            const ProductObj = {...data, id:Date.now()}
            setProduct( [...Product ,ProductObj])
        }

  return (
    <>
    <myContextProduct.Provider value={{Product, AddProduct}} >
    {props.children}
    </myContextProduct.Provider>
    </>
  )
}

export default MyProductContext;