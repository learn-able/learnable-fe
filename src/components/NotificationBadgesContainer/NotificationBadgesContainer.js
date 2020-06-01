import styled from 'styled-components'
import TestBadge from '../NotificationBadges/TestBadge'
import { PlaylistContext } from '../../contexts/playlistContext'
import { useContext } from 'react'
import moment from 'moment'

const Wrapper = styled.div`
  background: #f9f9f9;
  display: flex;
  align-items: center;
  width: 65vw;
  height: 12.5rem;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  box-shadow: ${({ theme }) => theme.styles.boxShadowLight};
  align-self: center;
  display: flex;
  overflow-y: scroll;
`

const NotificationBadgesContainer = () => {
  const playlistContext = useContext(PlaylistContext);
  console.log(playlistContext.state.playlists);
  console.log(moment().format('MM/DD/YYYY'));
  return (
    <Wrapper>
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
      <TestBadge />
    </Wrapper>
  )
}

export default NotificationBadgesContainer
