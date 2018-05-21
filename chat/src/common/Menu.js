import React from 'react'

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Material-ui 1.0
import List from '@material-ui/core/List'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'

const Menu = () => {
  return (
    <List>
      <MenuItem><Link to={'/messages'}>Wiadomości</Link></MenuItem>
      <MenuItem><Link to={'/users'}>Użytkownicy</Link></MenuItem>
      <Divider />
      <MenuItem><Link to={'/login'}>Logowanie</Link></MenuItem>
    </List>
  )
}

export default Menu