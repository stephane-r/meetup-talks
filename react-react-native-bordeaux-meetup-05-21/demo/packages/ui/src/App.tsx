import React, { Suspense } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import { AppHeader } from './AppHeader'
import { Movies } from './Movies'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.body}>
          <AppHeader />
          <View style={{ padding: 10 }}>
            <Movies />
          </View>
        </View>
      </ScrollView>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
})
