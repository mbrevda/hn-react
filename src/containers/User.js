import React, {Component} from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  render() {
    return this.props.user
  }
}

User.propTypes = {
  user: PropTypes.string
}

export default User
