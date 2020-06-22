import React, { Component } from 'react'

class Login extends Component {
  state = {
    answer: 0,
  }

  componentDidMount() {
    fetch('/api/users')
      .then((res) => res.json())
      .then((res) => this.setState({ answer: Object.values(res)[0] }))
  }

  render() {
    const { answer } = this.state
    return (
      <div>
        <h1>Welcome to React!</h1>
        <p>API Says: {answer}</p>
      </div>
    )
  }
}

export default Login
