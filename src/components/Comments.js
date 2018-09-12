import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  href: {
    textDecoration: 'none'
  }
})

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

export default withStyles(styles)(Comments)
