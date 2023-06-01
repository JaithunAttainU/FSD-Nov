import React from "react";
import Thumbnail from "./Thumbnail";
import Details from "./Details";

function YoutubeCard(props) {
  //<React.Fragment>

  const { videoInfo } = props

  //Props are read-only
  // props.videoInfo = 'sdfsrg'
  console.log(props)
  return ( //JSX
    <div className="card w-25 m-2">
      <Thumbnail imageUrl={videoInfo.imageUrl} />
      <Details videoInfo={videoInfo} />
    </div>
  )
}

export default YoutubeCard;