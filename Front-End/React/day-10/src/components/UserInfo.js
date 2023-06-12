import React from 'react'
import { useSelector } from 'react-redux'
export default function UserInfo() {

  const selectedUser = useSelector((state) => {
    return state.selectedUserInfo
  })
  return (
    <div>
      {selectedUser ? (
        <>
          <h4>Name: {selectedUser.name}</h4>
          <div>Id: {selectedUser.id}</div>
        </>
      ) : null}

    </div>
  )
}
