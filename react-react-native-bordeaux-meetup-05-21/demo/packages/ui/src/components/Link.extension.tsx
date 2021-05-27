import React from 'react'
import { useRouter } from 'next/link'
import { Button } from 'react-native'

interface Props {
  slug: string
}

export const Link = ({ slug }: Props) => {
  const handleClick = () =>
    window.open(`http://localhost:3000/movie?slug=${slug}`, '_ blank')

  return <Button title="Movie detail" onPress={handleClick} />
}
