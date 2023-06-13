import React from 'react'
import ChildB from './ChildB'

function ChildA() {
  return (
    <div className='childA'>
      <div>ChildA</div>
      <ChildB />
    </div>

  )
}

export default ChildA