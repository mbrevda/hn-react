import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import ParentItems from '../containers/ParentItems.js'
import Titlebar from 'src/components/Titlebar.js'
import Loadable from 'react-loadable'
import Loading from 'src/components/Loading.js'

const ChildItemsLoader = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'ChildItems' */ 'src/containers/ChildItems.js'),
  loading: Loading
})

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Titlebar />
          <Route exact path="/" component={ParentItems} />
          <Route path="/items/:id" component={ChildItemsLoader} />
        </>
      </BrowserRouter>
    )
  }
}

export default Routes
