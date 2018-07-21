import React, { Component } from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'


const HomeContainer = styled.div`

`

class Home extends Component {
  state = {
    isLoading: true,
    loadingPercent: 0
  }
  render() {
    const { isLoading, loadingPercent } = this.state
    return (
      <HomeContainer>
        <Loading isLoading={isLoading} loadingPercent={loadingPercent} />
      </HomeContainer>
    )
  }
}

export default Home