import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementAction, incrementAction } from '../actions'
import { updateCounter } from '../reducers/counterReducer'

function CartCounter() {

  //Get data from store using useSelector Hook
  const count = useSelector((state) => {
    return state.count
  })

  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementAction()) //{type: 'INCREMENT'}
  }

  const decrement = () => {
    dispatch(decrementAction()) //{type: 'DECREMENT'}
  }
  return (
    <div className='card w-25 mx-1'>
      <img alt="" src={'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'} />
      <div className='d-flex justify-content-center'>
        <button id="add" onClick={increment} >+</button>
        <div>Ordered: {count}</div>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default CartCounter