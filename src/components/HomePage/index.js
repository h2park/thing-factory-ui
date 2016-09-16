import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import Button from 'zooid-button'
import Page from 'zooid-page'
import {AppBar, AppBarPrimary} from 'zooid-ui'

import 'zooid-ui/dist/style.css'
import styles from './styles.css'

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

  return <div className={styles.wrapper}>
    <AppBar className={styles.appBar}>
      <AppBarPrimary className={styles.appBarPrimary}>
        <Link to="/" className={styles.appBarPrimaryLink}>Thing Factory</Link>
      </AppBarPrimary>
    </AppBar>
    <Page error={error} className={styles.pulse}>
      <h1 className={styles.header}>Thing Factory</h1>
      <p className={styles.apologeticExplanation}>CLick this buttTTon fto make uur thang</p>
      <Button kind="primary" size="large" onClick={onClick} className={styles.button}>Build Thing</Button>
    </Page>
  </div>
}

HomePage.propTypes    = propTypes
HomePage.defaultProps = defaultProps

export default HomePage
