import React, { Component } from 'react'

export default class UserInfo extends Component {

  componentWillUnmount() {
    console.log("ComponentWillUnmount is called")
  }

  render() {

    const { name, email, website } = this.props.userInfo
    return (
      <div>
        <h4>Name: {name}</h4>
        <div>Email: {email}</div>
        <div>Website: {website}</div>
      </div>
    )
  }
}
