import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../../src/components/Header/Header'

const Playlist = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <h1>Playlist: {id}</h1>
    </>
  )
}

export default Playlist
