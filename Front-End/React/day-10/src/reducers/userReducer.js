
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

export const updateSelectedUserInfo = (prevState = {}, action) => {
  switch (action.type) {
    case 'SELECT_USER':
      return action.payload
    default:
      return prevState
  }
}

export const fetchUsers = (prevState = [], actions) => {
  return [
    {
      id: '1',
      name: 'Aman'
    },
    {
      id: '2',
      name: 'Abhijit'
    },
    {
      id: '3',
      name: 'Ashwin'
    },
    {
      id: '4',
      name: 'Bajrangi'
    }
  ]
}