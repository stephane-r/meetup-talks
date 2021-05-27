import React from 'react'
import {
  Button,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { useQuery } from 'react-query'
import { Card } from './Card'
import { PICTURES } from '../constants'
import { usePlatform } from '../hooks/usePlatform'
import { Link } from './Link'
import { Spacer } from './Spacer'

export const Movies = () => {
  const { isWeb, isWebMobile, isWebDesktop } = usePlatform()
  const { data, isLoading, error } = useQuery('movies', () =>
    fetch('https://swapi.dev/api/films/').then((response) => response.json()),
  )

  if (isLoading) {
    return <Text>Fetching data</Text>
  }

  if (error) {
    return <Text>👀</Text>
  }

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: isWebDesktop ? 'center' : 'flex-start',
        },
      ]}
    >
      {[...data.results, ...data.results, ...data.results].map(
        (movie: any, index: number) => (
          <Card card={{ ...movie, picture: PICTURES[index] }} />
        ),
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
