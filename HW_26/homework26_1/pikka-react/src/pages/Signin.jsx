import React, {Component} from "react";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://guver.net/api/v1/auth/signin', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),  
        credentials: 'include'
      })
   
      console.log(response.status)
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit} style={{ textAlign: "left" }}>
        <input
          style={{ display: "block", marginBottom: "0.5rem" }}
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
          required
        />
        <input
          style={{ display: "block", marginBottom: "0.5rem" }}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={this.handleChange}
          required
        />
        <button>Sign Up</button>
      </form>
    );
  }
}

export default Signin;
