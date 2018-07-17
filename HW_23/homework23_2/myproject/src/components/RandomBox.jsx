import React, { Component } from 'react'

const colorLists = ['red', 'blue', 'green', 'purple', 'pink']

class RandomBox extends Component {

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
  }
  
  render() {
    // const rand = 0
    const elem = { backgroundColor: colorLists[this.getRandomInt(0,4)], width: 100, height: 100, fontSize: this.getRandomInt(20,40) }
    return (
      <div style={elem}>Random box</div>
    )
  }
}

export default RandomBox