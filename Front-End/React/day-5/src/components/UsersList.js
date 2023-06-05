import React, { Component } from 'react'
import UserInfo from './UserInfo'

export default class UsersList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      selectUserId: null,
      selectedUserInfo: null
    }
  }

  fetchUser = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await userResponse.json()
    this.setState({ users: usersData })
  }

  fetchUserById = async () => {
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${this.state.selectUserId}`)
    const usersData = await userResponse.json()
    this.setState({ selectedUserInfo: usersData })
  }

  componentDidMount() {
    this.fetchUser()
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.selectUserId && this.state.selectUserId !== prevState.selectUserId) {
      this.fetchUserById()
    }
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount is called")
  }

  render() {

    let userInfo;
    if (this.state.selectedUserInfo) {
      userInfo = <UserInfo userInfo={this.state.selectedUserInfo} />
    } else {
      userInfo = <div>No User Selected</div>
    }

    return (
      <>
        <div className='text-center'>UsersList</div>
        {this.state.users.map((user) => {
          return (
            <div className='card m-1' key={user.id} onClick={() => this.setState({ selectUserId: user.id })}>
              <h6>{user.name}</h6>
            </div>
          )
        })}
        {userInfo}
        {/* {(this.state.selectedUserInfo) ? <UserInfo userInfo={this.state.selectedUserInfo} /> : null} */}

        {/* {this.state.selectedUserInfo && <UserInfo userInfo={this.state.selectedUserInfo} />}
        {!this.state.selectedUserInfo && <div>No User Selected</div>} */}
      </>
    )
  }
}

// Conditional Redering

// 1. Ternary Operator
// 2. Logical Operator
// 3. If else /Switch