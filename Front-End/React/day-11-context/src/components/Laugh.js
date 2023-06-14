import React, { useState } from 'react'
import withReactions from './withReactions'

function Laugh(props) {

  return (
    <div>
      <button onClick={props.incrementcount}>laugh</button>
      <div>{props.count}</div>
    </div>
  )
}

export default withReactions(Laugh)