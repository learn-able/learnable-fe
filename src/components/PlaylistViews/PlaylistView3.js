import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import ProgressBar from '../ProgressBar/ProgressBar'


const PlaylistView3 = ({ title, playlistItems }) => {
  return (
    <>
      <PlaylistTitle title={title} playlistItems={playlistItems} />
      <ProgressBar playlistItems={playlistItems} />
      <div>3</div>
    </>
  )
}

export default PlaylistView3
