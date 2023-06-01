import React, { useState } from 'react'
import '../styles/cardCounter.css';

function CartCounterFunc() {

  const [counter, setCounter] = useState(0)
  // const [name, setName] = useState("Abhinav")

  const styleObj = {
    backgroundColor: 'green',
    width: '300px',
  }
  return (
    <div className='card w-25' id='cart-card' >
      <img alt="" src='https://occ-0-1001-590.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f' />
      <div className='d-flex justify-content-center'>
        <button id="add" onClick={() => {
          setCounter(counter + 1)
          console.log("Increment Count", counter)
        }} >+</button>
        {/* Access state values */}
        <div>Ordered: {counter}</div>
        <button onClick={() => {
          setCounter(counter - 1)
          console.log("Decrement Count", counter)
        }}>-</button>
      </div>

    </div>
  )
}

export default CartCounterFunc