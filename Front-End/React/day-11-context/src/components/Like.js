import React, { useState } from 'react'
import withReactions from './withReactions'

function Like(props) {

  return (
    <div>
      <button onClick={props.incrementcount}>Like</button>
      <div>{props.count}</div>
    </div>
  )
}

export default withReactions(Like);