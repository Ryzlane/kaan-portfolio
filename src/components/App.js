import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from './Container/Container.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Container} />
        </Switch> 
      </Router>
    )
  }
}

export default App