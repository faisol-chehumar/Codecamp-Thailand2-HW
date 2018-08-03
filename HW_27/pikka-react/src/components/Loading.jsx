import React from 'react'
import styled from 'styled-components'
import { setColor } from '../styles'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  text-shadow:
    -1px -1px 0 hsl(240, 2%, 5%, 1),
    1px -1px 0 hsl(240, 2%, 5%, 1),
    -1px 1px 0 hsl(240, 2%, 5%, 1),
    1px 1px 0 hsl(240, 2%, 5%, 1);
  width: 100%;
  height: 100vh;
  position: fixed;
  color: ${setColor('highlight')};
  font-size: 5rem;
`

const Loading = () => {
  return (
    <LoadingContainer>
      <h1>HELLO</h1>
    </LoadingContainer>
  )
}

export default Loading