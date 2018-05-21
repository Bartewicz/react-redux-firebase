import React, { Component } from 'react'
import Drawer from './common/Drawer'
import AppBar from './common/AppBar'
import logo from './logo.svg'
import './App.css'

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
      <div className="App">

        <Drawer
          isDrawerOpen={this.state.isDrawerOpen}
          drawerHandler={this.drawerHandler}
        />
        <AppBar
          drawerHandler={this.drawerHandler}
        />

      </div>
    )
  }
}

export default App
