import React from 'react'
import {
  Button,
  Dimensions,
  Image,
  Platform,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { useQuery } from 'react-query'
import { Spacer } from './Spacer'

const PICTURES = [
  'https://fr.web.img2.acsta.net/pictures/20/08/03/12/15/2118693.jpg',
  'https://fr.web.img4.acsta.net/c_310_420/pictures/19/03/05/14/47/4778578.jpg',
  'https://fr.web.img6.acsta.net/medias/nmedia/18/78/95/70/19485155.jpg',
  'https://fr.web.img4.acsta.net/c_310_420/pictures/19/11/14/15/32/1956274.jpg',
  'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/68/10/09/19186143.jpg',
  'https://fr.web.img3.acsta.net/c_310_420/pictures/21/05/12/10/00/4510528.jpg',
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

  const mobileColumnWidth = Dimensions.get('window').width / 2 - 10

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {data.results.map((movie: any, index: number) => (
        <View
          key={movie.title}
          style={{
            padding: 10,
            width: isWeb ? 'auto' : mobileColumnWidth,
          }}
        >
          <Image
            source={{ uri: PICTURES[index] }}
            style={{
              width: isWeb ? 300 : mobileColumnWidth - 20,
              height: isWeb ? 400 : 200,
            }}
          />
          <Spacer height={15} />
          <Text style={{ fontSize: 24, fontWeight: '600' }}>{movie.title}</Text>
          <Spacer height={10} />
          <Text>By {movie.producer}</Text>
          <Spacer height={10} />
          <Text numberOfLines={3}>{movie.opening_crawl}</Text>
          <Spacer height={15} />
          <Button title="Movie detail" onPress={() => console.log('test')} />
        </View>
      ))}
    </View>
  )
}

const usePlatform = () => {
  const isWeb = Platform.OS === 'web'
  const isWebMobile = isWeb && Dimensions.get('window').width < 641
  const isWebDesktop = isWeb && Dimensions.get('window').width > 1200
  const isWindows = Platform.OS === 'windows'
  const isAndroid = Platform.OS === 'android'
  const isIos = Platform.OS === 'ios'
  const isMacOs = Platform.OS === 'macos'
  const isMobile = isAndroid || isIos
  const isDesktop = isWindows || isMacOs

  return {
    isWeb,
    isWebMobile,
    isWindows,
    isAndroid,
    isIos,
    isMacOs,
    isMobile,
    isDesktop,
  }
}
