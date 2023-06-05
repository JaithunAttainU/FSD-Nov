import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import UserInfo from './UserInfo'

function UsersListFunc() {

  // users: [],
  // selectUserId: null,
  // selectedUserInfo: null
  const [users, setUsers] = useState([])
  const [selectUserId, setSelectUserId] = useState()
  const [selectedUserInfo, setSelectedUserInfo] = useState()

  const fetchUser = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await userResponse.json()
    setUsers(usersData)
  }

  const fetchUserById = async () => {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${selectUserId}`)
    const usersData = await userResponse.json()
    setSelectedUserInfo(usersData)
  }

  //componentDidMount - give [] as dependency list, only on first render
  useEffect(() => {
    fetchUser()
  }, [])

  //componentDidUpdate - give [selectUserId] as dependency list, on first render and every time selected user is changed
  useEffect(() => {
    if (selectUserId) {
      fetchUserById()
    }
  }, [selectUserId])

  return (
    <>
      <div className='text-center'>UsersList</div>
      {users.map((user) => {
        return (
          <div className='card m-1' key={user.id} onClick={() => setSelectUserId(user.id)}>
            <h6>{user.name}</h6>
          </div>
        )
      })}
      {(selectedUserInfo) ? <UserInfo userInfo={selectedUserInfo} /> : null}
    </>
  )
}

export default UsersListFunc