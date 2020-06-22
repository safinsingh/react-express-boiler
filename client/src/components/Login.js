import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Login extends Component {
  state = {
    answer: 0,
  }

  componentDidMount() {
    fetch('/api/users')
      .then((res) => res.json())
      .then((res) => this.setState({ answer: Object.values(res)[0] }))
  }

  onClick = () => {
    this.setState({
      answer: this.state.answer + 1,
    })
  }

  render() {
    const { answer } = this.state
    return (
      <div>
        <h1>Welcome to React!</h1>
        <p>API Says: {answer}</p>
        <Button color="primary" onClick={this.onClick.bind(this)}>
          Add
        </Button>
      </div>
    )
  }
}

export default Login
