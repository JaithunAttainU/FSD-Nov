import React, { useState, useEffect } from 'react'

function withReactions(IncomingComponent) { //<Laugh/>
  return function () {
    const [reactionCount, setReactionCount] = useState(0)

    const incrementReactionCount = () => {
      setReactionCount(reactionCount + 1)
    }
    return (
      <div>
        <input />
        <IncomingComponent incrementcount={incrementReactionCount} count={reactionCount} />
      </div>
    )

  }
}

export default withReactions;

//HOC should always start by 'with'
//Should receive a component as argument and return component