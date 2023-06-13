import React, { useContext } from 'react'
import { UserContext } from './App'

function ChildC() {

  const constextData = useContext(UserContext)
  const { userName, isLogged } = constextData
  return (
    <div className='childC'>
      ChildC
      {/* {
        <UserContext.Consumer>
          {(value) => {
            const { userName, isLogged } = value
            return (
              <>
                UserName: {userName}
                isLogged: {`${isLogged}`}
              </>
            )
          }}
        </UserContext.Consumer>
      } */}
      <>
        UserName: {userName}
        isLogged: {`${isLogged}`}
      </>
    </div>
  )
}

export default ChildC