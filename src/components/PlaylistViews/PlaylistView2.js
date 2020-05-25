import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import DatePickerInput from '../DatePickerInput/DatePickerInput'

const PlaylistView2 = ({ title, playlistItems }) => {
  return (
    <>
      <PlaylistTitle title={title} playlistItems={playlistItems} />
      <DatePickerInput />
    </>
  )
}

export default PlaylistView2
