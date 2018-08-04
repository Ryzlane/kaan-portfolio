import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from './Container/Container.js'

const App = () =>
  <Router>
    <Switch>
      <Route exact path='/' component={Container} />
    </Switch> 
  </Router>

export default App