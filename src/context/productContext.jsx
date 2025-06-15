import { createContext, useEffect, useState } from 'react'

export const myContextProduct = createContext();

const MyProductContext = (props) => {

  const [Product, setProduct] = useState(
    () => JSON.parse(localStorage.getItem("pro")) || []
  )

  const AddProduct = (data) => {
    const ProductObj = { ...data, id: Date.now() }
    setProduct([...Product, ProductObj])
  }

  useEffect(() => {
    localStorage.setItem("pro", JSON.stringify(Product))
  }, [Product])

  return (
    <>
      <myContextProduct.Provider value={{ Product, setProduct, AddProduct }} >
        {props.children}
      </myContextProduct.Provider>
    </>
  )
}

export default MyProductContext;