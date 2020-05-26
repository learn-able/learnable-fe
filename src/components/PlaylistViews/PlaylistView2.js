import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import DatePickerInput from '../DatePickerInput/DatePickerInput'
import PlaylistItemContainer from '../PlaylistItemContainer/PlaylistItemContainer'

const PlaylistView2 = ({ title, playlistItems }) => {
  return (
    <>
      <PlaylistTitle title={title} playlistItems={playlistItems} />
      <DatePickerInput />
      <PlaylistItemContainer playlistItems={playlistItems} />
    </>
  )
}

export default PlaylistView2
