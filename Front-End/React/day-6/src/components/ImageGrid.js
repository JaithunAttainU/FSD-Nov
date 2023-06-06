import React from 'react'

export default function ImageGrid(props) {

  const { images } = props
  return (
    images.map((image) => {
      return <img className='m-5' key={image.id} alt={image.alt_description} src={image.urls.regular} style={{ width: '25%' }} />
    })
  )
}
