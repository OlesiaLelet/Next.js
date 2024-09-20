"use client"
import React from 'react';

import { notFound } from 'next/navigation';
import { lusitana } from '@/app/ui/fonts';




// function generateRandomN (count: number)  {
//     return Math.floor(Math.random() * count)
//   }
  

export default function reviewId({params}: {
    params: {
        productId: string,
        reviewId : string
    }
}) {
 
  // const random = generateRandomN(2);
  // if (random ===1) {
  //   throw new Error("New Error occur")
  // }
  

  if(parseInt(params.reviewId)>1000) {
    notFound();
  }
  return (
    <>
     <h1 className={lusitana.className}>product {params.productId} review {params.reviewId}</h1> 
     {/* <Image
     src="/free-icon-emotions-17782101.png"
     alt='hero image'
     width={560}
      className="hidden md:block"
     height ={620}
     ></Image> */}
    </>
  )
}
