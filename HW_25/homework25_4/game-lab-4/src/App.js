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
    cardStatesTable: [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ],
    isWin: false
  }

  chkWinCondition() {
    const [a, b, c, d, e] = this.state.cardStatesTable;
    // const allCardState = [...a, ...b, ...c, ...d, ...e]
    return[...a, ...b, ...c, ...d, ...e].reduce((i, j) => i * j) ? this.setState({isWin: true}) : 'Not win yet!'
    
    
    // let win = true
    // this.state.cardStatesTable.forEach((x) => {
    //   [...x].forEach((k) => {
    //     if(k === 0) {
    //       win = false
    //     }
    //   })
    // })
    
    // if(win === true) {
    //   this.setState({isWin: win})
    // }

    // console.log(this.state.isWin)
  }
  
  toggleCard = (row, col) => {
    const
      cardStatesTableTmp = [...this.state.cardStatesTable],
      indexList = [
        [row, col],
        [row, col - 1],
        [row - 1, col],
        [row, col + 1],
        [row + 1, col]
      ]
    
    indexList
      .filter((index) => {
        const [r, c] = [...index]
        return r <= 4 && r >= 0 && c <= 4 && c >= 0
      })
      .forEach(index => {
        const [r, c] = [...index]
        cardStatesTableTmp[r][c] = cardStatesTableTmp[r][c] === 0 ? cardStatesTableTmp[r][c] + 1 : 0
      })

    this.setState({cardStatesTable: cardStatesTableTmp})
    this.chkWinCondition()
  }

  render() {
    const { cardStatesTable, isWin } = this.state

    return (
      <Container>
        <CardTable
          cardStatesTable={cardStatesTable}
          toggleCard={this.toggleCard}
          isWin={isWin}
        />
      </Container>
    )
  }
}

export default App;
