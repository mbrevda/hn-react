import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Time extends Component {
  render() {
    return (
      new Date(this.props.time * 1000).toLocaleDateString() +
      ' ' +
      new Date(this.props.time * 1000).toLocaleTimeString()
    )
  }
}

Time.propTypes = {
  time: PropTypes.number
}

export default Time
