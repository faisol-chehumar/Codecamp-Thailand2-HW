import React, { Component } from 'react'

class UserGenerateApp extends Component {

  state = {
    email: '',
    gender: '',
    title: '',
    firstName: '',
    lastName: '',
    img: ''
  }

  generateUser = () => {
    let api = 'https://randomuser.me/api/'
    fetch(api)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        // console.log(response.results[0])
        this.setState({
          email: response.results[0].email,
          gender: response.results[0].gender,
          title: response.results[0].name.title,
          firstName: response.results[0].name.first,
          lastName: response.results[0].name.last,
          img: response.results[0].picture.large,
        
        })
      })
  }
  
  render() {
    
    return (
      <div>
        <img src={this.state.img} alt="User images" width="50%"/>
        <p>Email: {this.state.email}</p>
        <p>Gender: {this.state.gender}</p>
        <p>User: {this.state.title}.{this.state.firstName} {this.state.lastName}</p>
        <button onClick={(e) => {this.generateUser()}}>
          Generate user
        </button>
      </div>
    )
  }
}

export default UserGenerateApp