import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Header } from './Header'
import { Movies } from './Movies'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

interface Props {
  children: React.ReactChild | React.ReactChild[]
}

export const App = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.body}>
        <Header />
        <View style={{ padding: 10 }}>{children}</View>
      </View>
    </ScrollView>
  </QueryClientProvider>
)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'white',
  },
})
