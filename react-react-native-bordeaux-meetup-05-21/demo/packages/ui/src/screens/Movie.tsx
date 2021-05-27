import * as React from 'react'
import { Text } from 'react-native'
import { App } from '../components/App'
import { usePlatform } from '../hooks/usePlatform'
import { Movie } from '../components/Movie'

export const MovieScreen = (props) => {
  const { isWeb } = usePlatform()

  return (
    <App showHeader={false}>
      <Movie slug={isWeb ? props.slug : props.route.params.slug} />
    </App>
  )
}
