import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import UserInfo from './UserInfo'

function UsersListFunc() {

  //Rules of Hooks(Below samples are not allowed)
  // if (true) {
  //   const [users, setUsers] = useState([])

  // } else {

  // }

  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  //   const [users, setUsers] = useState([])

  // }

  // function dummy() {
  //   const [users, setUsers] = useState([])
  // }

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

    const intervalId = setInterval(() => {
      console.log("Interval is called")
    }, 2000)

    //ComponentWillUnMount - executed when the component is unmounted.
    return () => {
      console.log("Component Unmounted")
      clearInterval(intervalId)
    }
  }, [])

  //componentDidUpdate - give [selectUserId] as dependency list, on first render and every time selected user is changed
  useEffect(() => {
    if (selectUserId) {
      fetchUserById()
    }
  }, [selectUserId])

  //componentDidUpdate - executed on every render
  // useEffect(() => {
  //   fetchUser()
  // })

  //ComponentWillUnMount - useEffect Hooks
  //Rules of Hooks
  //Develop a project
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