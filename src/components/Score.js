import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Score extends Component {
  render() {
    return String.fromCharCode(9652) + ' ' + this.props.score
  }
}

Score.propTypes = {
  score: PropTypes.number
}

export default Score
