import React, { createContext } from "react";
import YoutubeCard from "./YoutubeCard";
import videoData from "../mock/videoData";

export const VideoContext = createContext()

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
        return (
          <>
            <VideoContext.Provider value={video}>
              <YoutubeCard />
            </VideoContext.Provider>
          </>
        )
      })}
      </div>
    </>
  )
}

export default App;