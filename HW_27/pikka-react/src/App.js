import React, { Component } from 'react'
// import logo from './logo.svg'
import { injectGlobal } from 'styled-components'
import 'normalize.css'
import Home from './views/home'

injectGlobal`
  h1,h2,h3,h4,h5,h6 {
    &::selection {
      background-color: red;
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
