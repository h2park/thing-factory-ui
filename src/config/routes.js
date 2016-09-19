import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppLayout from '../components/AppLayout'
import Authenticated from '../containers/Authenticated'
import Home from '../containers/Home'
import NotFound from '../components/NotFound'
import { storeAuthenticationAndRedirect } from '../services/auth-service'


export default (
  <Route component={AppLayout}>
    <Route path="/auth/callback" onEnter={storeAuthenticationAndRedirect} />
    <Route path="/" component={Authenticated}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </Route>
)
