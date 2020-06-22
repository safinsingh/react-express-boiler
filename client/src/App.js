import React, { Component } from 'react'
import { Container } from 'reactstrap'

import Login from './components/Login'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Login />
        </Container>
      </div>
    )
  }
}

export default App
