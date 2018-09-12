import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import PropTypes from 'prop-types'
import Time from 'src/components/Time.js'
import Headline from 'src/components/Headline.js'
import Comments from 'src/components/Comments.js'
import Score from 'src/components/Score.js'
import User from 'src/containers/User.js'

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
          <Headline title={this.props.title} />
          <Typography component="p">
            <Score score={this.props.score} />
            {' | '}
            <User user={this.props.by} />
            {' | '}
            <Time time={this.props.time} />
            {' | '}
            <Comments kids={this.props.kids} />
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
