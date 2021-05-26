import * as React from 'react'
import { Text } from 'react-native'
import { App } from './App'
import { Movie } from './Movie'
import { usePlatform } from './Movies'

export const MovieScreen = (props) => {
  const { isWeb } = usePlatform()

  return (
    <App showHeader={false}>
      <Movie slug={isWeb ? props.slug : props.route.params.slug} />
    </App>
  )
}
