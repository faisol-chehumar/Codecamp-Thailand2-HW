import React, { Component } from 'react'
import CardColor from './CardColor'

class CardDeck extends Component {

  state = {
    cardDeck: []
  }

  shuffleCard = () => {
    const color = ['red', 'blue', 'green', 'purple', 'pink']

    let shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

    const randColor1 = shuffle(color)
    const randColor2 = shuffle(color)
    const cardDeck = [...randColor1, ...randColor2]
    console.log(cardDeck)
    this.setState({
      cardDeck
    })
  }
  
  render() {

    return (
      <div className="card-deck">
        {
          this.state.cardDeck.map(card => {
            return (
              <CardColor 
                color = {card}
              >Hello</CardColor>
            )
          })
        }
        <button onClick={(e) => { this.shuffleCard() }}>
          Shuffle Card
        </button>
      </div>
    )
  }
}

export default CardDeck