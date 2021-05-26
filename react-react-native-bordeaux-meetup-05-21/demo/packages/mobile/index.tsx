import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { App as UiApp } from '@my-app/ui/src/App'
import { MoviesScreen } from '@my-app/ui/src/MoviesScreen'
import { MovieScreen } from '@my-app/ui/src/MovieScreen'
import { name as appName } from './app.json'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        slug={({ params }) => params.slug}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => App)
