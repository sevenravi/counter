'use client'
import React, { useState } from 'react'
import { AiTwotoneLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { GiImpLaugh } from "react-icons/gi";
import { FaRegAngry } from "react-icons/fa";
import { FaRegSadCry } from "react-icons/fa";

const reaction=[
  {icon:<AiTwotoneLike/>,type:null},
  {icon:<AiTwotoneLike/>,type:"like"},
  {icon:<FcLike/>,type:"love"},
  {icon:<GiImpLaugh/>,type:"haha"},
  {icon:<FaRegAngry/>,type:"angry"},
  {icon:<FaRegSadCry/>,type:"sad"},
]

const Reaction = () => {
  const [count, setcount] = useState(0)
  const [reactionOpen, setreactionOpen] = useState(false)
  const [reactiontype, setreactiontype] = useState(null)

  const handleReaction = (action) => {
    setreactiontype(action)
    console.log(action,reactiontype)
    if (action === reactiontype) {
      setreactiontype("like")
    }
  }

  const ReactionDiv = () => {
    return (
      <div className="reaction">
        {reaction.map((item,id)=>{
      if (item.type) // if item type is empty the item is not rendered
      return(
        <button onClick={() => handleReaction(item?.type)} >{item?.icon}</button>
    )})
    }
        {/* <button  onClick={() => handleReaction('like')} className="like1"><AiTwotoneLike /></button>
        <button onClick={() => handleReaction('love')} className="love"><FcLike /></button>
        <button  onClick={() => handleReaction('haha')}  className="haha"><GiImpLaugh /></button>
        <button  onClick={() => handleReaction('angry')}  className="angry"><FaRegAngry /></button>
        <button  onClick={() => handleReaction('sad')} className="sad"><FaRegSadCry /></button> */}
      </div>
    )
  }
//generating the clicked button from the reaction div
  const GenerateReactionButton = ()=>{
    const selectedItem = reaction.find(item=> item.type === reactiontype)
    return <button onMouseEnter={() => setreactionOpen(true)}  >{selectedItem.icon}</button>
  }
  // const GenerateReactionButton = () => {
    
  //   if (reactiontype === "like") {
  //     return <button onMouseEnter={() => setreactionOpen(true)}  ><AiTwotoneLike /></button>
  //   }
  //   else if (reactiontype === "love") {
  //     // console.log(reactiontype)
  //     // console.log(love)
  //     return <button  onMouseEnter={() => setreactionOpen(true)}  ><FcLike /></button>
  //   }
  //   else if (reactiontype === "angry") {
  //     return <button  onMouseEnter={() => setreactionOpen(true)}  ><FaRegAngry /></button>
  //   }
  //   else if (reactiontype === "sad") {
  //     return <button  onMouseEnter={() => setreactionOpen(true)}  ><FaRegSadCry /></button>
  //   }
  //   else if (reactiontype === "haha") {
  //     return <button  onMouseEnter={() => setreactionOpen(true)}  ><GiImpLaugh /></button>
  //   }
  //   else  {
  //     return <button  onMouseEnter={() => setreactionOpen(true)} onClick={(e) => {  handleReaction('inc');  console.log(e)} } >Like</button>
     
  //   }
  // }

  return (
    <div>
      <div className='division'>
      {reactiontype}
        {reactionOpen && <ReactionDiv />}
        <GenerateReactionButton />

      </div>
    </div>
  )
}

export default Reaction