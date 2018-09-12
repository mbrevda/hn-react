import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Time extends Component {
  constructor() {
    super()
    this.state = {momentIsLoaded: global.Moment}
  }

  componentDidMount() {
    import(/* webpackChunkName:'react-moment' */ 'react-moment').then(
      ({default: Moment}) => {
        global.Moment = Moment
        this.setState({momentIsLoaded: true})
      }
    )
  }

  render() {
    let dateString =
      new Date(this.props.time * 1000).toLocaleDateString() +
      ' ' +
      new Date(this.props.time * 1000).toLocaleTimeString()

    if (!this.state.momentIsLoaded) return dateString

    return (
      <Moment fromNow title={dateString}>
        {this.props.time * 1000}
      </Moment>
    )
  }
}

Time.propTypes = {
  time: PropTypes.number
}

export default Time
