import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import ParentItem from 'src/containers/ParentItem.js'

const styles = theme => ({
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

class ParentItems extends Component {
  constructor() {
    super()
    this.state = {items: []}
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          status: 'loaded',
          items: data
        })
      })
  }

  render() {
    return (
      <>
        {this.state.items.slice(0, 25).map(id => (
          <ParentItem id={id} />
        ))}
      </>
    )
  }
}

ParentItems.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(ParentItems)
