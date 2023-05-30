import React from 'react'

// function Details() {
//   return (
//     <div>Details</div>
//   )
// }

// class Component {

// }

//<div>Hello <span>world!</span></div>
class Details extends React.Component {
  //Mandatory Method that needs to be present to return JSX

  render() {
    // return React.createElement('div', { id: 'details' }, 'Hello', React.createElement('span', {}, 'World!'))
    return (
      <div className='row'>
        <div className='col-2 mt-1'>
          <img src='https://i.ytimg.com/vi/ZAYZmIfHEiU/hq720.jpg' className='img-fluid rounded-circle' />
        </div>
        <div className='col-10'>
          <h6>Passenger | Home (Official Album Audio)</h6>
          <div className='text-muted'>
            <h6>Passenger</h6>
            <h6>18k Views . 5h ago</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default Details


