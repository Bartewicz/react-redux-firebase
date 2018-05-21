import React, { Component } from 'react'
// Material-ui 1.0
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
// Components
import Menu from './Menu'

const styles = theme => ({
  drawerPaper: {
    position: 'fixed',
    width: 300,
  }
})

class MainDrawer extends Component {
  render() {
    const {isDrawerOpen, drawerHandler} = this.props
    return (
      <Drawer
        variant="persistent"
        anchor={'left'}
        open={isDrawerOpen}
        classes={{
          paper: this.props.classes.drawerPaper,
        }}
      >
        <h1>Chat</h1>
        <IconButton
          onClick={() => drawerHandler()}
        >
          <Close />
        </IconButton>
        <Menu />
      </Drawer >
    )
  }
}

export default withStyles(styles, { withTheme: true })(MainDrawer)