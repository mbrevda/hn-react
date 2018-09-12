import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
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

class ChildTitle extends Component {
  renderDate(date) {
    return (
      new Date(date * 1000).toLocaleDateString() +
      ' ' +
      new Date(date * 1000).toLocaleTimeString()
    )
  }

  renderCommentsText(kids, id) {
    if (!kids) return 'no comments yet'

    let count = kids.length
    return count + ' comment' + (count > 1 ? 's' : '')
  }

  render() {
    const {classes} = this.props

    if (this.props.status == 'loading') return <>Loading...</>

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {this.props.title}
          </Typography>
          <Typography component="p">
            {String.fromCharCode(9652) +
              ' ' +
              this.props.score +
              ' | ' +
              this.props.by +
              ' | ' +
              this.renderDate(this.props.time) +
              ' | '}
            {this.renderCommentsText(this.props.kids, this.props.id)}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

ChildTitle.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.number
}

export default withStyles(styles)(ChildTitle)
