import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const styles = theme => ({
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  href: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

class Titlebar extends Component {
  render() {
    const {classes} = this.props

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <a href="/" className={classes.href}>
              Hacker News
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

Titlebar.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Titlebar)
