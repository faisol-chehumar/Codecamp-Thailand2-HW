import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import 'normalize.css'
import Home from './views/home'
import {setColor} from './styles'

injectGlobal`
  html {
    background-color: ${setColor('base')};
  }

  h1, h2, h3, h4, h5, h6, {
    color: ${setColor('base', 25)};
    font-weight: 800;
    
    &::selection {
      background-color: ${setColor('highlight')};
    }
  }
`

const MainContainer = styled.div`
  
`

class App extends Component {
  render() {
    return (
      <MainContainer className="App">
        <Home />
      </MainContainer>
    )
  }
}

export default App
