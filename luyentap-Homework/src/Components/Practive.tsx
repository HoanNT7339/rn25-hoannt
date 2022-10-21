import React  , { useState } from 'react'

 interface IPractive {
 }

function Practive(props : IPractive) {
  const [count, setCount] = useState(0)
  const handleOnclick = () => {
        count < 10 ? setCount(count + 1) :
        alert('Được rồi')
  } 
  const [isLike, setIsLike] = useState(false)
  const handleIsLike = () => {
    console.log('clicked');
    setIsLike(!isLike)
    
    // isLike === true ? count + 1 : count 
  }
  // useEffect(()=>{
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmoint');
      
  //   }
  // },[])
  // useEffect(()=>{
  //   console.log('componentDidUpdate');
    
  // })
  // useEffect(()=>{},[])
  return (
    <>
      <div>{count}</div>
      <button id='123' onClick={handleOnclick}>Cộng</button>

      <div>
        <button onClick={handleIsLike}>{isLike === true? 'Unlike':'Like'}</button>
        <span>{isLike === true? count + 1: count}</span>
      </div>
    </>
  )
}

export default Practive