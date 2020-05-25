import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'

const PlaylistView2 = ({ title, playlistItems }) => {
  return (
    <>
      <PlaylistTitle title={title} playlistItems={playlistItems} />
      <div>2</div>
    </>
  )
}

export default PlaylistView2
