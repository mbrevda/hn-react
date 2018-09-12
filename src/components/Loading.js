import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import fetchCache from 'src/fetchCache.js'

const styles = theme => ({
  card: {
    marginTop: 16
  }
})

class Loading extends Component {
  render() {
    const {classes} = this.props
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography component="p">Loading...</Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Loading)
