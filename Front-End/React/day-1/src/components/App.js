import React from "react";
import YoutubeCard from "./YoutubeCard";
import videoData from "../mock/videoData";

//functional Component
function App() {

  // const batchName = 'dsfsegr'

  // const videoInfo = {
  //   title: 'Learn Javascript',
  //   views: 10,
  //   url: 'http://hjhjyu'
  // }
  return (
    <>
      {/* {batchName === 'FSD-Nov' ? `Hello ${batchName}` : ''} */}
      <h1>App Component</h1>
      {videoData.map((video) => {
        return <YoutubeCard videoInfo={video} />
      })}
    </>
  )
}

export default App;