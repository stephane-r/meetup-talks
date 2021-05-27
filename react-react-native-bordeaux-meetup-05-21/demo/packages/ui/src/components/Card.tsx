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
import { PICTURES } from '../constants'
import { usePlatform } from '../hooks/usePlatform'
import { Link } from './Link'
import { Spacer } from './Spacer'
import { Title } from './Title'

interface Props {
  card: any
}

const MOBILE_COLUMN_WIDTH = Dimensions.get('window').width / 2 - 10

export const Card = ({ card }: Props) => {
  const { isWeb, isWebMobile, isWebDesktop, isMobile } = usePlatform()

  const getPictureSize = () => {
    switch (true) {
      case isWeb && !isWebMobile:
        return {
          width: 300,
          height: 400,
        }
      case isWebMobile:
        return {
          width: 150,
          height: 150,
          marginRight: 10,
        }
      default:
        return {
          width: MOBILE_COLUMN_WIDTH - 30,
          height: 200,
        }
    }
  }

  const getCardContainerWidth = () => {
    switch (true) {
      case isWebMobile:
        return '100%'
      case isWebDesktop:
        return 'auto'
      default:
        return MOBILE_COLUMN_WIDTH
    }
  }

  return (
    <View
      key={card.title}
      style={[
        styles.cardContainer,
        {
          width: getCardContainerWidth(),
        },
      ]}
    >
      <View
        style={[
          styles.card,
          {
            flexDirection: isWebMobile ? 'row' : 'column',
          },
        ]}
      >
        <Image
          source={{ uri: card.picture }}
          style={{
            ...getPictureSize(),
            borderRadius: 6,
          }}
        />
        <View>
          {isWebDesktop && <Spacer height={20} />}
          {isMobile && <Spacer height={10} />}
          <Title title={card.title} />
          <Spacer height={10} />
          <Text numberOfLines={3}>{card.opening_crawl}</Text>
          <Spacer height={15} />
          <Link slug={card.url} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 5,
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, .06)',
    borderRadius: 6,
    padding: 10,
  },
})
