import React, { PropTypes } from 'react'

import {APP_OCTOBLU_URL} from 'config'
import AppLayout from '../components/AppLayout'
import {logout} from '../services/auth-service'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class App extends React.Component {
  handleLogout = () => {
    logout()
    window.location.href = APP_OCTOBLU_URL
  }

  render() {
    return <AppLayout onLogout={this.handleLogout}>{this.props.children}</AppLayout>
  }
}

App.propTypes = propTypes
