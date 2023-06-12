import React from 'react'
import { useEffect } from 'react'
import UserInfo from './UserInfo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectUserAction } from '../actions'


function UsersListFunc() {
  // const [usersList, setUsersList] = useState([])

  const users = useSelector(state => {
    return state.users
  })
  const dispatch = useDispatch()


  // const fetchUser = async () => {
  //   const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const usersData = await userResponse.json()
  //   setUsersList(usersData)
  // }

  useEffect(() => {
    // await fetchUser()
    dispatch(fetchUsers()) //{type: , payload: } //promises
  }, [])

  const selectUser = (user) => {
    dispatch(selectUserAction(user))
  }

  return (
    <>
      <div className='text-center'>UsersList</div>
      {users.map((user) => {
        return (
          <div className='card m-1' key={user.id} onClick={() => {
            selectUser(user)
          }}>
            <h6>{user.name}</h6>
          </div>
        )
      })}
      <UserInfo />
    </>
  )
}

export default UsersListFunc