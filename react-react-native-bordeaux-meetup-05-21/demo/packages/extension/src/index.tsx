import React from 'react'
import { AppRegistry } from 'react-native'
import { App } from '@my-app/ui/src/App'

const Test = () => (
  <div style={{ width: 460, height: 200 }}>
    <App />
  </div>
)

AppRegistry.registerComponent('my-app', () => Test)
AppRegistry.runApplication('my-app', {
  rootTag: document.getElementById('root'),
})
