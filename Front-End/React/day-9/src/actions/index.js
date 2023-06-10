//Action creators which are function that retrun action objects {type: '', payload: data}


export const incrementAction = () => {
  return {
    type: 'INCREMENT',
  }
}

export const decrementAction = () => {
  return {
    type: 'DECREMENT',
  }
}