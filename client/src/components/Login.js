import React, { Component } from 'react'

export class Login extends Component {
  state = {
    answer: 0,
  }

  componentDidMount() {
    fetch('/api/users')
      .then((res) => res.json())
      .then((res) => this.setState({ answer: Object.values(res)[0] }))
  }

  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>
        <p>API Says: {this.state.answer}</p>
      </div>
    )
  }
}

export default Login
