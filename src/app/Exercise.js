'use client'
import React, { useState } from 'react'


const Exercise = (probs) => {
    const [count, setcount] = useState(0)

    if (count<0){
        alert("The count is less than zero.")
    }
  return (
    <div className='division'>
        <h1 className="heading1">{probs.title}</h1>
      <h2 className="heading2">{count}</h2>
      <button className='btn' onClick={()=>setcount(count + 1)}>Increment</button>
      <button className='btn' onClick={()=>setcount(count - 1)}>Decrement</button>
      <button className='btn' onClick={()=>setcount(0)} disabled={count === 0}>Reset</button>

    </div>
  )
}

export default Exercise
