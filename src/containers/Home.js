import React from 'react'

import HomePage from '../components/HomePage'
import { createThing } from '../services/thing-service'

class Home extends React.Component {
  state = {
    error: null,
  }

  constructor(props) {
    super(props)
    this.templateUrl = props.location.query.templateUrl
  }

  handleBuildThing = () => {
    createThing(this.templateUrl, (error) => this.setState({ error }))
  }

  render() {
    const {error} = this.state

    return <HomePage error={error} onBuildThing={this.handleBuildThing} />
  }
}

export default Home
