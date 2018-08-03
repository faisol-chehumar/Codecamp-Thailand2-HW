import React, { Component } from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'


const HomeContainer = styled.div`

`

class Home extends Component {
  state = {
    isLoading: false,
    loadingPercent: 0
  }
  render() {
    const { isLoading } = this.state
    if (isLoading) return <Loading />
    return (
      <HomeContainer>
        <Navbar />
      </HomeContainer>
    )
  }
}

export default Home