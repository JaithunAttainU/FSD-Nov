import React, { useState } from 'react'

export default function Search(props) {

  const [searchText, setSearchText] = useState('')


  return (
    <div className='mx-3'>
      <form onSubmit={(event) => {
        event.preventDefault()
        props.fetchImages(searchText)
      }}>
        <input style={{ width: '100%' }} type='text' placeholder='Search Images....' value={searchText} onChange={(event) => {
          setSearchText(event.target.value)
        }} />
      </form>
    </div>
  )
}
