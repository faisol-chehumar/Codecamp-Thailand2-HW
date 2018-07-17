import React, { Component } from 'react'

// const carLists = [{title: 'Card-1', date: '07072018', likes: 1, comments: 'Hello'}, {title: 'Card-2', date: '07072018', likes: 1, comments: 'Hello'}, {title: 'Card-3', date: '07072018', likes: 1, comments: 'Hello'}, {title: 'Card-4', date: '07072018', likes: 1, comments: 'Hello'}, {title: 'Card-4', date: '07072018', likes: 1, comments: 'Hello'}]

class Card extends Component {

  render() {
    let cardItem = 
        <div className="col-sm-3" style={{ marginBottom: '1rem' }}>
          <div className="card">
            <div className="card-body ">
              <img src={this.props.imgSrc} width="100%" alt=""/>
              <p className="card-text">Date: {this.props.createBy }</p>
              <p className="card-text">Date: {this.props.date}</p>
              <p className="card-text">Like Count: {this.props.likeCount }</p>
              <p className="card-text">Comment Count: {this.props.commentCount }</p>
            </div>
          </div>
        </div>

    return (
      cardItem
    )
  }
}

export default Card