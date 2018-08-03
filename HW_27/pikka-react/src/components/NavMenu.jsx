import React from 'react'
import styled from 'styled-components'
import { setColor, setLayout } from '../styles'

const NavMenuContainer = styled.li`
  ${setLayout.widthHeight('100%', '5rem')};
  ${setLayout.flexFlowContentItem('row wrap', 'center', 'center')};
  background-color: ${setColor('base', 18)};
  color: ${setColor('base', 90)};
  font-size: 1.3rem;
  font-weight: 800;
  border-bottom: 1px solid #eee;

  &::selection {
    color: ${setColor('photon')};
    background-color: ${setColor('highlight')};
  }
`

const NavMenu = ({title}) => {
  return (
    <NavMenuContainer>
      {title}
    </NavMenuContainer>
  )
}

export default NavMenu