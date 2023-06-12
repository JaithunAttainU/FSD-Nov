//Action creators which are function that retrun action objects {type: '', payload: data}
import axios from 'axios'
export const selectUserAction = (user) => {
  return {
    type: 'SELECT_USER',
    payload: user
  }
}

export const fetchUsers = () => {
  return async function (dispatch, getState) {
    const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
      type: 'FETCH_USERS',
      payload: usersRes.data
    })
  }
}