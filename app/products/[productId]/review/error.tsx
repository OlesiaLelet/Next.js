"use client"
import React from 'react'

export default function Error({error, reset} : {error: Error, reset: ()=> void}) {
  return (
    <div>
      <h1> {error.message}</h1>
      <button className='text-grey-500' onClick={reset}>try again </button>
    </div>
  )
}
