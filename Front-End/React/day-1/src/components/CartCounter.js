import React, { Component } from 'react'

export default class CartCounter extends Component {

  constructor(props) {
    super(props); //this is to execute the base class constructor
    this.state = {
      counter: 0,   //initialize state values in constructor
    }
  }

  render() {
    // const ele = document.getElementById('add')
    // ele.addEventListener('click', () => { })
    return (
      <div className='card w-25'>
        <img src='https://occ-0-1001-590.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxJFBDckfZw1YUEIPwyuIg43Kw_HUBLvnCcgdOlvvf5Nc90SF3HSAi5L8uLyBqjziKBY-kGD2wu2JAqVsdHVR0frb6qG26I_U5v.jpg?r=77f' />
        <div className='d-flex justify-content-center'>
          <button id="add" onClick={() => {
            // this.state.counter = this.state.counter + 1
            this.setState({ counter: this.state.counter + 1 })
            console.log("Increment Count", this.state.counter)
          }} >+</button>
          {/* Access state values */}
          <div>Ordered: {this.state.counter}</div>
          <button onClick={() => {
            this.setState({ counter: this.state.counter - 1 })
            console.log("Decrement Count", this.state.counter)
          }}>-</button>
        </div>

      </div>
    )
  }
}
