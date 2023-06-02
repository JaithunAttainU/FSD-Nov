import React, { Component } from 'react'
import Dummy2 from './Dummy2'

export class Dummy extends Component {

  constructor(props) {
    console.log("constructor is called")
    super(props)
    this.state = {
      count: 0,
      showDummy2: false
    }
  }

  componentDidMount() {
    console.log("componentDidMount is called")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called")
  }

  render() {
    console.log("render is called")

    return (
      <div>Dummy{this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add</button>
        <button onClick={() => this.setState({ showDummy2: !this.state.showDummy2 })}>Toggle Dummy2</button>

        {this.state.showDummy2 ? <Dummy2 /> : null}
      </div>
    )
  }
}

export default Dummy