import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from './Header.web'

export const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to extension repo</Text>
  </View>
)
