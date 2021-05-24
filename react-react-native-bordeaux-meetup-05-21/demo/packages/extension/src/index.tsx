import { AppRegistry } from 'react-native'
import { App } from '@my-app/ui/src/App'

AppRegistry.registerComponent('my-app', () => App)
AppRegistry.runApplication('my-app', {
  rootTag: document.getElementById('root'),
})
