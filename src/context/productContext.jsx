import React, { createContext, useEffect, useState } from 'react'

export const myContextProduct = createContext();

const MyProductContext = (props) => {
  // const [Product, setProduct] = useState([{
  //   productName: "Redmi Note 13 pro",
  //   id:"1234567",
  //   brand:"Xiaomi",
  //   description: "Smartphone",
  //   color: "red",
  //   price: 30.000,
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1n8s-_AE10G62wwMJq6kNfeKn2bR3CZ_rE3HaoOmZtJ6KWTSeWac9DfIOr4neZuP9jE&usqp=CAU",
  // }])

  const [Product, setProduct] = useState(
    ()=> JSON.parse(localStorage.getItem("pro")) || []
  )

  const AddProduct = (data) => {
    const ProductObj = { ...data, id: Date.now() }
    setProduct([...Product, ProductObj])
  }

  useEffect(()=>{
    localStorage.setItem("pro",JSON.stringify(Product))
  }, [Product] )

  console.log(Product)

  return (
    <>
      <myContextProduct.Provider value={{ Product, setProduct, AddProduct }} >
        {props.children}
      </myContextProduct.Provider>
    </>
  )
}

export default MyProductContext;