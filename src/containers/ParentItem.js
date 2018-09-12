import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Time from 'src/components/Time.js'
import PropTypes from 'prop-types'

const styles = theme => ({
  card: {
    marginTop: 16
  },
  title: {},
  href: {
    textDecoration: 'none'
  }
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

  render() {
    const {classes} = this.props

    if (this.state.status == 'loading') return <>Loading...</>
    const url = this.state.url ? this.state.url : 'item/' + this.state.id

    return (
      <Card className={classes.card}>
        <CardContent>
          <a href={url} className={classes.href}>
            <Typography variant="headline" component="h2">
              {this.state.title}
            </Typography>
          </a>
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
              ' | '}
            <Time time={this.state.time} />
            {' | '}

            <a href={'items/' + this.state.id} className={classes.href}>
              {this.renderCommentsText(this.state.kids)}
            </a>
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
