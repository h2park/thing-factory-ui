import React from 'react'

import HomePage from '../components/HomePage'

class Home extends React.Component {
  constructor(props) {
    super(props)
    // this.templateUrl = props.routeParams.query.templateUrl
  }

  handleBuildThing = () => {
  }

  render() {
    return <HomePage onBuildThing={this.handleBuildThing} />
  }
}

export default Home
