import React, { Component } from 'react'
import styled from 'styled-components'
import {setColor, setLayout} from '../styles'

import NavMenu from './NavMenu'

const NavContainer = styled.ul`
  position: fixed;
  ${setLayout.widthHeight('15rem', '100%')};
  ${setLayout.flexFlowContentItem('row wrap', 'center', 'flex-start')};
  
  list-style: none;  
  background-color: ${setColor('base', 20)};
  border-right: 1px solid ${setColor('base', 15)};
  
`

class Navbar extends Component {
  state = {
    title: 'PIKKANODE'
  }

  render() {
    const { title } = this.state
    return (
      <NavContainer>
        <NavMenu title={title}/>
      </NavContainer>
    )
  }
}

export default Navbar