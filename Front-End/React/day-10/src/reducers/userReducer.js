
// //reducers to update count
// export const updateCounter = (prevState = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return prevState + 1
//     case 'DECREMENT':
//       return prevState - 1
//     default:
//       return prevState
//   }
// }


export const updateSelectedUserInfo = (prevState = null, action) => {
  switch (action.type) {
    case 'SELECT_USER':

      //Do not update prevState directly
      // prevState.selectedInfo = action.payload
      // prevState = action
      // return prevState

      //Do this
      // return {
      //   ...prevState,

      // }

      //or this
      return action.payload
    default:
      return prevState
  }
}

export const fetchUsers = (prevState = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload;
    default:
      return prevState
  }
}

// Impure functions


// Pure Functions

// Return same output for the same set of inputs irrespective of how many times it is called
// It should not depend on any other external variable apart from the inputs
// Side Effects
//   I / O Statements
//   File Operations
//   Console Log Statement
//   API Calls

// let count = 5
// function add(num1, num2) {
//   return num1 + num2 + count
// }

// add(1, 2) // 3
// add(3, 4)//7
// add(1, 2) //3


// add(1, 2) //8
// add(3, 4) //12
// add(1, 2) //6