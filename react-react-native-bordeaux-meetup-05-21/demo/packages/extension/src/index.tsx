import React from 'react'
import { AppRegistry } from 'react-native'
import { MoviesScreen } from '@my-app/ui/src/MoviesScreen'

const App = () => (
  <div style={{ width: 460, height: 200 }}>
    <MoviesScreen />
  </div>
)

AppRegistry.registerComponent('my-app', () => App)
AppRegistry.runApplication('my-app', {
  rootTag: document.getElementById('root'),
})
