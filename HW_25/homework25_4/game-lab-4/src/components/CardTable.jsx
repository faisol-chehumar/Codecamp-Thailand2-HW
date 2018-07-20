import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const CardContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  self-align: center;
  padding-left: 0;
  margin-top: 10rem;
  width: 300px;
`

const CardTable = ({cardStatesTable, toggleCard, isWin}) => (
  <CardContainer>
    {
      cardStatesTable.map((cardStateLists, row) => {
        return (
          cardStateLists.map((cardState, col) => {
            return (
              <Card
                isWin={isWin}
                cardState={cardState}
                toggleCard={toggleCard}
                row={row}
                col={col}
                key={`${row}-${col}`}/>
            )
          })
        )
      })
    }
  </CardContainer>
)

export default CardTable
