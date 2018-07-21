import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  background-color: hsl(240, 2%, 15%, 1);
  text-shadow:
    -1px -1px 0 hsl(240, 2%, 5%, 1),
    1px -1px 0 hsl(240, 2%, 5%, 1),
    -1px 1px 0 hsl(240, 2%, 5%, 1),
    1px 1px 0 hsl(240, 2%, 5%, 1);
  width: 100%;
  height: 100vh;
  position: fixed;
  color: hsl(240, 2%, 20%, 1);
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