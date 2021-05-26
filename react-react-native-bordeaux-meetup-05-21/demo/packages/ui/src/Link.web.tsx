import React from 'react'
import { useRouter } from 'next/router'
import { Button } from 'react-native'

interface Props {
  slug: string
}

export const Link = ({ slug }: Props) => {
  const router = useRouter()
  const handleClick = () => router.push(`/movie?slug=${slug}`)

  return <Button title="Movie detail" onPress={handleClick} />
}
