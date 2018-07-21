import React, { Component } from 'react'
import CardTable from './components/CardTable'
import styled from '../node_modules/styled-components';

const Container = styled.div`
  display: flex;
  background-color: #fefefefe;
  self-align: center;
  justify-content: center;
`

class App extends Component {

  state = {
    cardStateLists: [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ],
    isWin: false
  }

  chkWin() {
    const [a, b, c, d, e] = this.state.cardStateLists
    return [...a, ...b, ...c, ...d, ...e].reduce((i, j) => i * j) ? 
      this.setState({isWin: true}) : 'Not win yet!'
  }
  
  toggleCard = (row, col) => {
    const
      cardStateListsTmp = [...this.state.cardStateLists],
      toggleStateLists = [
        [row, col],
        [row, col - 1],
        [row - 1, col],
        [row, col + 1],
        [row + 1, col]
      ]
    
    toggleStateLists
      .filter((row) => {
        const [r, c] = [...row]
        return r <= 4 && r >= 0 && c <= 4 && c >= 0
      })
      .forEach(row => {
        const [r, c] = [...row]
        cardStateListsTmp[r][c] = cardStateListsTmp[r][c] === 0 ? cardStateListsTmp[r][c] + 1 : 0
      })

    this.setState({cardStateLists: cardStateListsTmp})
    console.log(this.state.cardStateLists)
    this.chkWin()
  }

  render() {
    const { cardStateLists, isWin } = this.state

    return (
      <Container>
        <CardTable
          cardStateLists={cardStateLists}
          toggleCard={this.toggleCard}
          isWin={isWin}
        />
      </Container>
    )
  }
}

export default App;
