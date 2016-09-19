import _ from 'lodash'
import React from 'react'

import HomePage from '../components/HomePage'
import { fetchRegistryItem } from '../services/registry-service'
import { createThing, fetchTemplate } from '../services/thing-service'

const propTypes = {
  location: React.PropTypes.object,
}

class Home extends React.Component {
  state = {
    error: null,
    registryItem: null,
    template: null,
  }

  constructor(props) {
    super(props)
    this.registryItemUrl = props.location.query.registryItemUrl
    this.templateUrl = props.location.query.templateUrl
  }

  componentDidMount() {
    const { registryItemUrl, templateUrl } = this

    fetchRegistryItem({ registryItemUrl }, (error, registryItem) => {
      if (error) return this.setState({ error })
      this.setState({ registryItem })
    })

    fetchTemplate({ templateUrl }, (error, template) => {
      if (error) return this.setState({ error })
      this.setState({ template })
    })
  }

  handleBuildThing = () => {
    const { templateUrl } = this
    createThing({ templateUrl }, (error, device) => {
      if (error) return this.setState({ error })

      const { uuid } = device
      window.location.href = `https://app.octoblu.com/device/${uuid}`
    })
  }

  render() {
    const { error } = this.state
    const iconUri = _.get(this.state, 'registryItem.iconUri')
    const name = _.get(this.state, 'registryItem.name')

    return <HomePage error={error} title={name} iconUrl={iconUri} onBuildThing={this.handleBuildThing} />
  }
}

Home.propTypes = propTypes

export default Home
