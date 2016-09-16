import React, { PropTypes } from 'react'
import Button from 'zooid-button'
import Page from 'zooid-page'

const propTypes = {
  error: PropTypes.object,
  onBuildThing: PropTypes.func.isRequired,
}

const defaultProps = {}

const HomePage = ({ error, onBuildThing }) => {
  const onClick = (event) => {
    event.preventDefault()
    onBuildThing()
  }

  return <Page error={error}>
    <Button kind="primary" size="large" onClick={onClick}>Build Thing</Button>
  </Page>
}

HomePage.propTypes    = propTypes
HomePage.defaultProps = defaultProps

export default HomePage
