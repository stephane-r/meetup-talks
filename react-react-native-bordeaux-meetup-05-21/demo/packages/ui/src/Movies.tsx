import React from 'react'
import { Dimensions, Image, Platform, Text, View } from 'react-native'
import { useQuery } from 'react-query'

const PICTURES = [
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcassiopee1.e-monsite.com%2Fmedias%2Falbum%2Favatar.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffr.web.img3.acsta.net%2Fpictures%2F210%2F380%2F21038062_20130907214845845.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffolkr.fr%2Fwp-content%2Fuploads%2F2018%2F01%2Ftop-20-affiches-de-films-2017-folkr-Dunkerque.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffr.web.img4.acsta.net%2Fpictures%2F18%2F05%2F16%2F12%2F23%2F1533322.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftatakiki.t.a.pic.centerblog.net%2Fo%2F9c6e4f7b.jpg&f=1&nofb=1',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffr.web.img4.acsta.net%2Fpictures%2F15%2F12%2F15%2F09%2F36%2F280269.jpg&f=1&nofb=1',
]

export const Movies = () => {
  const { isWeb } = usePlatform()
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
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {data.results.map((movie: uncknow, index) => (
        <View key={movie.title} style={{ padding: 10 }}>
          <Image
            source={{ uri: PICTURES[index] }}
            style={{
              width: isWeb ? 200 : Dimensions.get('window').width / 2 - 30,
              height: 200,
              marginBottom: 10,
            }}
          />
          <Text>{movie.title}</Text>
        </View>
      ))}
    </View>
  )
}

const usePlatform = () => {
  const isWeb = Platform.OS === 'web'
  const isWindows = Platform.OS === 'windows'
  const isAndroid = Platform.OS === 'android'
  const isIos = Platform.OS === 'ios'
  const isMacOs = Platform.OS === 'macos'
  const isMobile = isAndroid || isIos
  const isDesktop = isWindows || isMacOs

  return {
    isWeb,
    isWindows,
    isAndroid,
    isIos,
    isMacOs,
    isMobile,
    isDesktop,
  }
}
