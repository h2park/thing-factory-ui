import React from 'react'

import HomePage from '../components/HomePage'
import { createThing, fetchTemplate } from '../services/thing-service'

const propTypes = {
  location: React.PropTypes.object,
}

class Home extends React.Component {
  state = {
    error: null,
    template: null,
  }

  constructor(props) {
    super(props)
    this.templateUrl = props.location.query.templateUrl
  }

  componentDidMount() {
    fetchTemplate(this.templateUrl, (error, template) => {
      if (error) return this.setState({ error })
      this.setState({ template })
    })
  }

  handleBuildThing = () => {
    createThing(this.templateUrl, (error, device) => {
      if (error) return this.setState({ error })

      const { uuid } = device
      window.location.href = `https://app.octoblu.com/device/${uuid}`
    })
  }

  render() {
    const {error} = this.state

    return <HomePage error={error} onBuildThing={this.handleBuildThing} />
  }
}

Home.propTypes = propTypes

export default Home
