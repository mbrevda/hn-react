import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import PropTypes from 'prop-types'
import ChildItems from '../containers/ChildItems.js'

const styles = theme => ({
  card: {
    marginTop: 16
  },
  title: {
    marginBottom: 12
  },
  href: {
    textDecoration: 'none'
  }
})

class ChildItem extends Component {
  constructor() {
    super()

    this.state = {
      status: 'loading'
    }
  }

  componentDidMount() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          status: 'loaded',
          ...data
        })
      })
  }

  renderDate(date) {
    return (
      new Date(this.state.time * 1000).toLocaleDateString() +
      ' ' +
      new Date(this.state.time * 1000).toLocaleTimeString()
    )
  }

  render() {
    const {classes} = this.props

    if (this.state.status == 'loading') return <>Loading...</>
    if (this.state.deleted == true) {
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography component="p">deleted</Typography>
          </CardContent>
        </Card>
      )
    }
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {this.state.by + ' | ' + this.renderDate(this.state.time)}
          </Typography>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{__html: this.state.text}}
          />
          <ChildItems id={this.props.id} />
        </CardContent>
      </Card>
    )
  }
}

ChildItem.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.number
}

export default withStyles(styles)(ChildItem)