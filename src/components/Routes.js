import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import ParentItems from '../containers/ParentItems.js'
import ChildItems from '../containers/ChildItems.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route exact path="/" component={ParentItems} />
          <Route path="/items/:id" component={ChildItems} />
        </>
      </BrowserRouter>
    )
  }
}

export default Routes
