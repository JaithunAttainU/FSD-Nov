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

      <div className="d-flex">
      {videoData.map((video) => {
        return <YoutubeCard videoInfo={video} />
      })}
      </div>
    </>
  )
}

export default App;