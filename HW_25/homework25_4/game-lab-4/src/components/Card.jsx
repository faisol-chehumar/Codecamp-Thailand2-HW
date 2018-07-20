import React, { Component } from 'react'
import styled from 'styled-components'

const Retangle = styled.li`
  background-color: #eeeeee;
  border-radius: 8px;
  width: 50px;
  height: 50px;
  margin: .5rem 0 .5rem .5rem;
  cursor: pointer;
  transition: .5s all ease;
  list-style: none;

  &:hover {
    background-color: #f3f3f3;
  }

  &.flip-card {
    background-color: ${props => props.isWin ? 'green' : '#5caee8'};
  }
`

class Card extends Component {

  toggleCard = e => {
    e.preventDefault()
    this.props.toggleCard(this.props.row, this.props.col)
  }

  render() {

    return (
      <Retangle 
        className={this.props.cardState ? 'flip-card' : ''}
        onClick={this.toggleCard} 
        isWin={this.props.isWin} 
      />
    )
  }
}

export default Card
