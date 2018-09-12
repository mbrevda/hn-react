import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import ParentItems from '../containers/ParentItems.js'
import ChildItems from '../containers/ChildItems.js'
import Titlebar from 'src/components/Titlebar.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Titlebar />
          <Route exact path="/" component={ParentItems} />
          <Route path="/items/:id" component={ChildItems} />
        </>
      </BrowserRouter>
    )
  }
}

export default Routes
