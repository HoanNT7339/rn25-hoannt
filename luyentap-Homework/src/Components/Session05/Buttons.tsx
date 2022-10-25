import React  , { useState } from 'react'

 interface IButtons {
 }

function Buttons(props : IButtons) {
  const [count, setCount] = useState(0)
  const handleOnclick = () => {
        count < 10 ? setCount(count + 1) :
        alert('Đã đủ 10')
  } 
  const [countlike] = useState(0)
  const [isLike, setIsLike] = useState(false)
  const handleIsLike = () => {
    setIsLike(!isLike)

  }
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleOnclick}>Cộng</button>

      <div>
        <button onClick={handleIsLike}>{isLike === true? 'Unlike':'Like'}</button>
        <span>{isLike === true? countlike + 1: countlike}</span>
      </div>
    </>
  )
}

export default Buttons