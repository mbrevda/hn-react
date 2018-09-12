import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const styles = theme => ({
  href: {
    textDecoration: 'none'
  }
})

class Headline extends Component {
  render() {
    const {classes} = this.props

    return (
      <Typography variant="headline" component="h2">
        {this.props.title}
      </Typography>
    )
  }
}

Headline.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Headline)
