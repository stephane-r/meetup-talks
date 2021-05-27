import React from 'react'
import { Button, Text, TouchableNativeFeedbackBase } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LINK_LABEL } from '../constants'

interface Props {
  slug: string
}

export const Link = ({ slug }: Props) => {
  const navigation = useNavigation()
  const handlePress = () =>
    navigation.navigate('Movie', {
      slug,
    })

  return <Button title={LINK_LABEL} onPress={handlePress} />
}
