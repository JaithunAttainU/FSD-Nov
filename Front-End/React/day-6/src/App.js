import './App.css';
import Search from './components/Search'
import ImageGrid from './components/ImageGrid'
import React, { useState } from 'react'

function App() {

  const [images, setImages] = useState([])

  const fetchImages = async (searchText) => {
    const unsplashRes = await fetch(`https://api.unsplash.com/search/photos?query=${searchText}&client_id=ErYe3QDouaA9hX6a5GWTMGNCgF39md9dSV3dwSP7Bys`)
    const imagesData = await unsplashRes.json()
    setImages(imagesData.results)
  }

  return (
    <>
      <Search fetchImages={fetchImages} />
      <ImageGrid images={images} />
    </>
  );
}

export default App;
