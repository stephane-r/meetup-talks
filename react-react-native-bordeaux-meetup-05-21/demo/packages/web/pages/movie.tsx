import { MovieScreen as UiMovieScreen } from '@my-app/ui/src/screens/Movie'
import { useRouter } from 'next/router'

const MovieScreen = () => {
  const { query } = useRouter()

  if (!query.slug) {
    return null
  }

  return <UiMovieScreen slug={query.slug} />
}

export default MovieScreen
