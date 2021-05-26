import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to web repo</Text>
  </View>
)

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#f3f3f3',
    padding: 30,
  },
  text: {
    fontSize: 36,
    fontWeight: '600',
  },
})
