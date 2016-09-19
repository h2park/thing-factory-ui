import React, { PropTypes } from 'react'
import Button from 'zooid-button'
import ErrorState from 'zooid-error-state'

import 'zooid-ui/dist/style.css'
import styles from './styles.css'

const propTypes = {
  error: PropTypes.object,
  iconUrl: PropTypes.string,
  title: PropTypes.string,
  onBuildThing: PropTypes.func.isRequired,
}

const defaultProps = {}

const HomePage = ({ error, iconUrl, title, onBuildThing }) => {
  const onClick = (event) => {
    event.preventDefault()
    onBuildThing()
  }

  if (error) return <ErrorState description={error.message}  />

  return <div className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    <img src={iconUrl} className={styles.logo} />
    <Button kind="primary" size="large" onClick={onClick} className={styles.button}>Build</Button>
  </div>
}

HomePage.propTypes    = propTypes
HomePage.defaultProps = defaultProps

export default HomePage
