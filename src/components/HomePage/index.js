import React, { PropTypes } from 'react'
import Button from 'zooid-button'


const propTypes = {
  onBuildThing: PropTypes.func.isRequired,
}
const defaultProps = {}

const HomePage = ({ onBuildThing }) => {
  const onClick = (event) => {
    event.preventDefault()
    onBuildThing()
  }

  return <div>
    <Button kind="primary" size="large" onClick={onClick}>Build Thing</Button>
  </div>
}

HomePage.propTypes    = propTypes
HomePage.defaultProps = defaultProps

export default HomePage
