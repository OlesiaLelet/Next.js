"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Order() {
    const router = useRouter();
    const handlerClick = () => {
        console.log("succes");
        router.push('/')
        
    }

  return (
    <div>
      <h1>Order your product</h1>
      <button onClick={handlerClick}>Order</button>
    </div>
  )
}
