import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comments extends Component {
  render() {
    const {classes} = this.props

    if (!this.props.kids) return 'no comments yet'

    let count = this.props.kids.length
    return count + ' comment' + (count > 1 ? 's' : '')
  }
}

Comments.propTypes = {
  kids: PropTypes.array
}

export default Comments
