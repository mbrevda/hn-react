import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import ParentItems from '../containers/ParentItems.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ParentItems} />
      </BrowserRouter>
    )
  }
}

export default Routes
