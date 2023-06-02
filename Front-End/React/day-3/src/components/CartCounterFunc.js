import React, { useState } from 'react'
import '../styles/cardCounter.css';

function CartCounterFunc(props) {

  const [counter, setCounter] = useState(0)
  // const [name, setName] = useState("Abhinav")

  const styleObj = {
    backgroundColor: 'green',
    width: '300px',
  }
  return (
    <div className='card w-25 mx-1' id='cart-card' >
      <img alt="" src={props.imageUrl} />
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