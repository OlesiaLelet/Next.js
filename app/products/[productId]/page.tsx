import React from 'react'

export default function ProductDetails({params} : {
    params: {
        productId : string
    }
}) {

  function generateRandomN (count: number)  {
    return Math.floor(Math.random() * count)
  }
  
 
  const random = generateRandomN(2);
  if (random ===1) {
    throw new Error("New Error occur")
  }
  return (
    <>
     <h1>product details {params.productId}</h1> 
    </>
  )
}
