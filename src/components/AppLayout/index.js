import React, { PropTypes } from 'react'
import NavLogo from 'zooid-octoblu-nav-logo'
import Page from 'zooid-page'
import {AppBar, AppBarPrimary, AppBarSecondary} from 'zooid-ui'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
}
const defaultProps = {}

const AppLayout = ({ children, onLogout }) => {
  const onClickLogout = (event) => {
    event.preventDefault()
    onLogout()
  }

  return <div>
    <AppBar className={styles.appBar}>
      <AppBarPrimary className={styles.appBarPrimary}>
        <a href="https://app.octoblu.com" className={styles.navLogoLink}>
          <NavLogo className={styles.navLogo}/>
        </a>
      </AppBarPrimary>
      <AppBarSecondary className={styles.appBarSecondary}>
        <a href onClick={onClickLogout} className={styles.logout}>Sign out</a>
      </AppBarSecondary>
    </AppBar>
    <Page>
      {children}
    </Page>
  </div>
}

AppLayout.propTypes    = propTypes
AppLayout.defaultProps = defaultProps

export default AppLayout
