import React from 'react'
import { View } from 'react-native'

interface Props {
  height: number
}

export const Spacer = ({ height }: Props) => <View style={{ height }} />
