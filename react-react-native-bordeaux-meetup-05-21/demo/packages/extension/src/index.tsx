import React from 'react'
import { AppRegistry } from 'react-native'
import { MoviesScreen } from '@my-app/ui/src/MoviesScreen'

const Test = () => (
  <div style={{ width: 460, height: 200 }}>
    <MoviesScreen />
  </div>
)

AppRegistry.registerComponent('my-app', () => Test)
AppRegistry.runApplication('my-app', {
  rootTag: document.getElementById('root'),
})
