import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import ThingFactoryUi from '../src'

storiesOf('ThingFactoryUi', module)
  .addWithInfo('Basic', 'added Description', () => (
    <ThingFactoryUi />
  ), { inline: true })
  .add('Basic', () => (
    <ThingFactoryUi />
  ))
