import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import ChildTitle from 'src/components/ChildTitle.js'
import ChildItem from 'src/containers/ChildItem.js'

const styles = theme => ({
  menuButton: {}
})

class ChildItems extends Component {
  constructor() {
    super()

    this.state = {
      status: 'loading'
    }
  }

  componentDidMount() {
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${this.props.id ||
        this.props.match.params.id}.json`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          status: 'loaded',
          ...data
        })
      })
  }

  render() {
    const {classes} = this.props

    if (this.state.status == 'loading') return <>Loading...</>

    return (
      <div>
        {this.state.type != 'comment' ? <ChildTitle {...this.state} /> : ''}
        {this.state.kids
          ? this.state.kids.map(id => <ChildItem id={id} key={id} />)
          : ''}
      </div>
    )
  }
}

ChildItems.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(ChildItems)
