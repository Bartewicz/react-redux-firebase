import React from 'react'
// Material-ui 1.0
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const MainAppBar = ({ drawerHandler }) => {
  return (
    <AppBar position="static" >
      <IconButton
        color={'inherit'}
        onClick={() => drawerHandler()}
      >
        <MenuIcon />
      </IconButton >
    </AppBar >
  )
}

export default MainAppBar