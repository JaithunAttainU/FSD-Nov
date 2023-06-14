import React, { useState } from 'react'
import withReactions from './withReactions'

function Heart(props) {

  return (
    <div>
      <button onClick={props.incrementcount}>heart</button>
      <div>{props.count}</div>
    </div>
  )
}

export default withReactions(Heart)