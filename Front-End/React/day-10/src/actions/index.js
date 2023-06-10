//Action creators which are function that retrun action objects {type: '', payload: data}

export const selectUserAction = (user) => {
  return {
    type: 'SELECT_USER',
    payload: user
  }
}

export const fetchUsers = () => {
  return {
    type: 'FETCH_USERS',
  }
}