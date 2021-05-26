import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Header } from './Header'
import { Movies } from './Movies'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

interface Props {
  showHeader?: boolean
  children: React.ReactChild | React.ReactChild[]
}

export const App = ({ showHeader = true, children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.body}>
        {showHeader && <Header />}
        <View style={{ padding: showHeader ? 10 : 0 }}>{children}</View>
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
