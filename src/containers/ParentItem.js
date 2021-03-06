import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Time from 'src/components/Time.js'
import PropTypes from 'prop-types'
import Headline from 'src/components/Headline.js'
import Comments from 'src/components/Comments.js'
import Score from 'src/components/Score.js'
import User from 'src/containers/User.js'
import fetchCache from 'src/fetchCache.js'
import {Link} from 'react-router-dom'
import Loading from 'src/components/Loading.js'

const styles = theme => ({
  card: {
    marginTop: 16
  },
  title: {},
  href: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

class ParentItem extends Component {
  constructor() {
    super()

    this.state = {
      status: 'loading'
    }

    this._isMounted = false
  }

  loadData(onlyFromCache, props) {
    fetchCache(
      `https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json`,
      {onlyFromCache}
    ).then(data => {
      if (!this._isMounted || !data) return
      this.setState({
        status: 'loaded',
        ...data
      })

      requestAnimationFrame(props.measure)
    })
  }

  componentDidMount() {
    this._isMounted = true
  }
  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const {classes} = this.props
    if (this.state.status == 'loading') {
      this.loadData(this.props.isScrolling, this.props)
      return <Loading />
    }

    const url = this.state.url ? this.state.url : 'item/' + this.state.id

    return (
      <Card className={classes.card}>
        <CardContent>
          <a href={url} className={classes.href}>
            <Headline title={this.state.title} />
          </a>
          {this.state.url ? (
            <Typography className={classes.title} color="textSecondary">
              {new URL(this.state.url).hostname}
            </Typography>
          ) : (
            ''
          )}
          <Typography component="p">
            <Score score={this.state.score} />
            {' | '}
            <User user={this.state.by} />
            {' | '}
            <Time time={this.state.time} />
            {' | '}

            <Link to={'items/' + this.state.id} className={classes.href}>
              <Comments kids={this.state.kids} />
            </Link>
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
