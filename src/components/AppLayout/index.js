import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import NavLogo from 'zooid-octoblu-nav-logo'
import Page from 'zooid-page'
import {AppBar, AppBarPrimary} from 'zooid-ui'

import {APP_OCTOBLU_URL} from 'config'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.object,
}
const defaultProps = {}

const AppLayout = ({ children }) => {
  return <div>
    <AppBar className={styles.appBar}>
      <AppBarPrimary className={styles.appBarPrimary}>
        <a href="https://app.octoblu.com" className={styles.navLogoLink}>
          <NavLogo className={styles.navLogo}/>
        </a>
      </AppBarPrimary>
    </AppBar>
    <Page>
      {children}
    </Page>
  </div>
}

AppLayout.propTypes    = propTypes
AppLayout.defaultProps = defaultProps

export default AppLayout
