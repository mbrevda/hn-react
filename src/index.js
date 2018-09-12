import 'typeface-roboto'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/Routes.js'

ReactDOM.render(<Routes />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}
