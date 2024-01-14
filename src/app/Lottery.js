'use client'
import React, {useEffect, useState} from 'react'

const page = () => {
  const [ randomNum, setRandomNum ] = useState(0)
  const lotteryItem = ['lose', 'lose', 'jetplane', 'lose','1000$']
  const [resultDiv, setresultDiv] = useState(false)

  let time
  useEffect(()=>{
    time =  setTimeout(()=>{
        if(randomNum === 4){
          setRandomNum(0)
        }else{
          setRandomNum(randomNum+1)
        }
      },200)
  },[randomNum])


  const submitLottery = () => {
      clearTimeout(time)
      setresultDiv(!resultDiv) // for triggring 2 divs
      console.log(resultDiv)
      if (resultDiv) setRandomNum(0)// for triggering redo button
     
   }
  return (
    <div>
      {randomNum}
        {!resultDiv && lotteryItem.map((item,id)=>{
          return <li style={{backgroundColor:id===randomNum ? "red": null}} >{item}</li>
        })}

        {resultDiv && <div>{lotteryItem[randomNum] === "lose" ? "u lose ": "u won " + lotteryItem[randomNum]}</div>}
       
        <button onClick={submitLottery}>{!resultDiv ? "stop ": "redo"}</button>
    </div>
  )
}

export default page