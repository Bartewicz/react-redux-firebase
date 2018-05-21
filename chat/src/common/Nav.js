import React from 'react'

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MessagesList from '../MessagesList'

const TempView = () => (
  <div>
    {Math.random()}
  </div>
)

const Nav = (props) => {
  return (
      <div>
        <Route path="/messages" component={MessagesList} />
        <Route path="/users" component={TempView} />
        <Route path="/login" component={TempView} />
      </div>
  )
}

export default Nav