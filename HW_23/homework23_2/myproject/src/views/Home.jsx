import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Foobar from '../components/Foobar'
import RandomBox from '../components/RandomBox'
import UserGenerateApp from '../components/UserGenerateApp';
import CardDeck from '../components/CardDeck';

class Home extends Component {
  cardLists = [{id: '1', imgSrc: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350', date: '07072018', likeCount: 1, commentCount: 'Hello'}, {id: '2', imgSrc: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350', date: '07072018', likeCount: 1, commentCount: 'Hello'}, {id: '3', imgSrc: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350', date: '07072018', likeCount: 1, commentCount: 'Hello'}, {id: '4', imgSrc: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350', date: '07072018', likeCount: 1, commentCount: 'Hello'}]
  render() {
    return (
      <div>
        <Navbar />
        <h1>Home</h1>
        <div className="container">
          <div className="row">
            <div className="card-deck">
              {
                this.cardLists.map(card => 
                  <Card
                    key = {card.id}
                    imgSrc = {card.imgSrc}
                    createBy = {card.createBy}
                    date = {card.date}
                    likeCount = {card.likeCount}
                    commentCount = {card.commentCount }
                  />
                )
              }
            </div>
          </div>
          <RandomBox />
          <UserGenerateApp />
          <div className="container">
            <div className="row">
              <CardDeck />
            </div>
          </div>
        </div>
        <Foobar />
      </div>
    )
  }
}

export default Home