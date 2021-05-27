import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { usePlatform } from '../hooks/usePlatform'

interface Props {
  title: string
}

export const Title = ({ title }: Props) => {
  const { isMobile } = usePlatform()

  return (
    <Text style={[styles.title, { fontSize: isMobile ? 20 : 24 }]}>
      {title}
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
})
