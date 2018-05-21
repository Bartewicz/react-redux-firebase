import React, { Component } from 'react'

import { HashRouter as Router } from 'react-router-dom'

import Drawer from './common/Drawer'
import AppBar from './common/AppBar'
import './App.css'
import Nav from './common/Nav'

class App extends Component {
  state = {
    isDrawerOpen: true
  }

  drawerHandler = () => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    })
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Drawer
            isDrawerOpen={this.state.isDrawerOpen}
            drawerHandler={this.drawerHandler}
          />
          <AppBar
            drawerHandler={this.drawerHandler}
          />
          <Nav />

        </div>
      </Router>
    )
  }
}

export default App
