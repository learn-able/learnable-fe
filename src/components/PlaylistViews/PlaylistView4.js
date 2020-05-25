import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import ProgressBar from '../ProgressBar/ProgressBar'

const PlaylistView4 = ({ title, playlistItems }) => {
  return (
    <>
      <PlaylistTitle title={title} playlistItems={playlistItems} />
      <ProgressBar playlistItems={playlistItems} />
      <div>4</div>
    </>
  )
}

export default PlaylistView4
