import React, { useContext } from 'react'
import { VideoContext } from './App'

function Thumbnail() {

  const { imageUrl } = useContext(VideoContext)
  return (
    <img src={imageUrl} />
  )
}

export default Thumbnail

//useRef, Higher Order Components
//BackEnd - React
//Deploy