"use client";
import React from 'react';
import { useState } from 'react';

export default function ForgotPassword() {

  const [input, setInput] = useState("");
  return (
    <div>
      <input  value = {input} onChange={(event) => setInput(event.target.value) }></input>
      <h1>Forgot password</h1>
    </div>
  )
}
