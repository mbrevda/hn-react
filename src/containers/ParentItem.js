import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import PropTypes from 'prop-types'

const styles = theme => ({
  card: {
    marginBottom: 16
  },
  title: {}
})

class ParentItem extends Component {
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

  renderCommentsText(kids) {
    if (!kids) return 'no comments yet'

    let count = kids.length
    return count + ' comment' + (count > 1 ? 's' : '')
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

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {this.state.title}
          </Typography>
          {this.state.url ? (
            <Typography className={classes.title} color="textSecondary">
              {new URL(this.state.url).hostname}
            </Typography>
          ) : (
            ''
          )}
          <Typography component="p">
            {String.fromCharCode(9652) +
              ' ' +
              this.state.score +
              ' | ' +
              this.state.by +
              ' | ' +
              this.renderDate(this.state.time) +
              ' | ' +
              this.renderCommentsText(this.state.kids)}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

ParentItem.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.number
}

export default withStyles(styles)(ParentItem)
