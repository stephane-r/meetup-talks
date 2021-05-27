import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'react-native'
import { LINK_LABEL } from '../constants'

interface Props {
  slug: string
}

export const Link = ({ slug }: Props) => {
  const router = useRouter()
  const handleClick = () => router.push(`/movie?slug=${slug}`)

  return <Button title={LINK_LABEL} onPress={handleClick} />
}
