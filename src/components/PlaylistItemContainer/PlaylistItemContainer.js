import styled from 'styled-components'
import PlaylistItem from '../PlaylistItem/PlaylistItem'

const Div = styled.div`
  flex-grow: 1;
`

const PlaylistItemContainer = ({ playlistItems }) => {
  const items = playlistItems.map(item => <PlaylistItem key={item.id} {...item} />)

  return <Div>{ items }</Div>
}

export default PlaylistItemContainer
