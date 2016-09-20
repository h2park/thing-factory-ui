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
    loading: true,
  }

  constructor(props) {
    super(props)
    this.registryItemUrl = props.location.query.registryItemUrl
  }

  componentDidMount() {
    const { registryItemUrl } = this

    fetchRegistryItem({ registryItemUrl }, (error, registryItem) => {
      if (error) return this.setState({ error, loading: false })
      this.setState({ registryItem, loading: false })
    })
  }

  handleBuildThing = () => {
    const templateUrl = _.get(this.state, 'registryItem.templateUrl')

    createThing({ templateUrl }, (error, device) => {
      if (error) return this.setState({ error })

      const { uuid } = device
      window.location.href = `https://app.octoblu.com/device/${uuid}`
    })
  }

  render() {
    const { error, loading } = this.state
    const iconUri = _.get(this.state, 'registryItem.iconUri')
    const name = _.get(this.state, 'registryItem.name')

    return <HomePage
      error={error}
      loading={loading}
      title={name}
      iconUrl={iconUri}
      onBuildThing={this.handleBuildThing} />
  }
}

Home.propTypes = propTypes

export default Home
