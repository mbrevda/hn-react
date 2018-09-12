import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
//import Routes from 'src/containers/Routes.js'
import Titlebar from 'src/components/Titlebar.js'
import PropTypes from 'prop-types'
import Routes from 'src/components/Routes.js'

const styles = theme => ({
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

class Shell extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {classes} = this.props

    return (
      <>
        <Titlebar
          onLocaleChange={locale => {
            this.setState({locale})
          }}
        />
        <Routes />
      </>
    )
  }
}

Shell.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Shell)
