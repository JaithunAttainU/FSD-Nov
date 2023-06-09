import React, { useState } from 'react'
import { useSessionStorage } from '../customHooks'

function RegistrationForm() {

  const [userName, setUserName] = useSessionStorage('username')
  const [phone, setPhone] = useSessionStorage('phone')
  const [email, setEmail] = useSessionStorage('email')

  return (
    <div>
      <input type='text' placeholder='Enter Username' value={userName} onChange={(event) => {
        setUserName(event.target.value)
      }} />
      <input type='email' placeholder='Enter Email' value={email} onChange={(event) => {
        setEmail(event.target.value)
      }} />
      <input type='number' placeholder='Enter Phone' value={phone} onChange={(event) => {
        setPhone(event.target.value)
      }} />
    </div>
  )
}

export default RegistrationForm