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

    console.log(this.props)
    const { title, uploadTime, uploaderAvatar, views, uploaderName } = this.props.videoInfo
    return (
      <div className='row'>
        <div className='col-2 mt-1'>
          <img src={uploaderAvatar} className='img-fluid rounded-circle' />
        </div>
        <div className='col-10'>
          <h6>{title}</h6>
          <div className='text-muted'>
            <h6>{uploaderName}</h6>
            <h6>{views} Views . {uploadTime} ago</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default Details




// const detailsComponent = new Details(props)
// detailsComponent.render()

// class Details {
//   constructor(props) {
//     // this.name = props.name
//     // this.age = props.age

//     this.props = props
//   }

//   getName() {
//     return this.props
//   }

//   getAge() {
//     return this.age
//   }
// }