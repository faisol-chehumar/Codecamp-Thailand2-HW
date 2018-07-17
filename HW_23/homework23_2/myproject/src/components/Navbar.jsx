import React, { Component } from 'react'
// import logo from '../logo.svg'

class Navbar extends Component {
  render() {
    return (
      <ul className="nav" style={{borderBottom: '1px solid #eee'}}>
        <li className="nav-item">
          <a className="nav-link active" href="/">
            <img src="https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png" className="App-logo" alt="logo" width="60px" />
            Logo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/create">Create Pikka</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Signup</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signin">Signin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signout">Signout</a>
        </li>
      </ul>
    )
  }
}

export default Navbar