import React, { Component } from 'react'
// Material-ui 1.0
import List from '@material-ui/core/List'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'

const Menu = () => {
  return (
    <List>
      <MenuItem>Wiadomości</MenuItem>
      <MenuItem>Użytkownicy</MenuItem>
      <Divider />
      <MenuItem>Logowanie</MenuItem>
    </List>
  )
}

export default Menu