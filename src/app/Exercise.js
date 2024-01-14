'use client'
import React, { useState } from 'react'


const Exercise = (probs) => {
    const [count, setcount] = useState(0)

    const handlechange =(operation)=>{
      operation === 'inc' ? setcount(count +1 ) : setcount(count - 1)
    }

    
  return (
    <div className='division'>
        <h1 className="heading1">{probs.title}</h1>
      <h2 className="heading2">{count}</h2>
      <button className='btn' onClick={()=>handlechange('inc')}>Increment</button>
      <button className='btn' onClick={()=>handlechange('dec')} disabled={count === 0}>Decrement</button>
      <button className='btn' onClick={()=>setcount(0)} disabled={count === 0}>Reset</button>

    </div>
  )
}

export default Exercise
