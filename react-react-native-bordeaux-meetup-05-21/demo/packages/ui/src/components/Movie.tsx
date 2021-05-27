import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { useQuery } from 'react-query'
import { Spacer } from './Spacer'

export const Movie = ({ slug }) => {
  console.log(slug)
  const { data, isLoading, error } = useQuery('movie', () =>
    fetch(slug).then((response) => response.json()),
  )

  if (isLoading) {
    return <Text>Fetching movie</Text>
  }

  if (error) {
    return <Text>👀</Text>
  }

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Image
        source={{
          uri:
            'https://fr.web.img2.acsta.net/pictures/20/08/03/12/15/2118693.jpg',
        }}
        style={{ width: Dimensions.get('window').width, height: 200 }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: '600' }}>{data.title}</Text>
        <Spacer height={10} />
        <Text>Director : {data.director}</Text>
        <Spacer height={10} />
        <Text>Producer : {data.producer}</Text>
        <Spacer height={10} />
        <Text>opening_crawl : {data.opening_crawl}</Text>
      </View>
    </View>
  )
}
