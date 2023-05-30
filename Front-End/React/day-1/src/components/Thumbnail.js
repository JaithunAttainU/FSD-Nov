import React from 'react'

function Thumbnail(props) {

  const { imageUrl } = props
  return (
    <img src={imageUrl} />
  )
}

export default Thumbnail