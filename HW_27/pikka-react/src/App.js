import React, { Component } from 'react'
// import logo from './logo.svg'
import { injectGlobal } from 'styled-components'
import 'normalize.css'
import Home from './views/home'
import { getColor } from './styles/colors'

injectGlobal`
  h1, h2, h3, h4, h5, h6, p {
    &::selection {
      background-color: ${getColor('photon')};
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default App
