import React from "react";
import Thumbnail from "./Thumbnail";
import Details from "./Details";

function YoutubeCard() {

  return ( //JSX
    <div className="card w-25 m-2">
      <Thumbnail />
      <Details />
    </div>
  )
}

export default YoutubeCard;