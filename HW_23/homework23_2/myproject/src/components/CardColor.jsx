import React, { Component } from 'react'

// const carLists = [{title: 'Card-1', date: '07072018', likes: 1, comments: 'Hello'}, {title: 'Card-2', date: '07072018', likes: 1, comments: 'Hello'}, {title: 'Card-3', date: '07072018', likes: 1, comments: 'Hello'}, {title: 'Card-4', date: '07072018', likes: 1, comments: 'Hello'}, {title: 'Card-4', date: '07072018', likes: 1, comments: 'Hello'}]

class CardColor extends Component {

  alertColor = (color) => {
    alert(color)
  }

  render() {
    let CardColor = 
      <div className="col-sm-3" style={{ marginBottom: '1rem' }} onClick={(e) => {this.alertColor(this.props.color)}}>
        <div className="card">
          <div className="card-body" style={{ backgroundColor: this.props.color }}>
          <p>{this.props.children}</p>
          </div>
        </div>
      </div>


    return (
      CardColor
    )
  }
}

export default CardColor