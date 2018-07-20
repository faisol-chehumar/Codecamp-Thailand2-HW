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

  &.bg-blue {
    background-color: #5caee8;
  }
`

class Card extends Component {
  // state = {
  //   cardState: this.props.cardState
  // }

  toggleCard = e => {
    e.preventDefault()
    console.log(this.props.row)
    console.log(this.props.col)
    this.props.toggleCard(this.props.row, this.props.col)
    // this.setState(prevState => ({cardState: prevState.cardState === 0 ? prevState.cardState + 1 : 0}))
  }

  render() {
    // const { cardState } = this.state

    return (
      <Retangle 
        className={this.props.cardState ? 'bg-blue' : ''}
        onClick={this.toggleCard} 
      />
    )
  }
}

export default Card
