import styled from 'styled-components'
import AccountCreatedBadge from '../NotificationBadges/AccountCreated'
import { PlaylistContext } from '../../contexts/playlistContext'
import { useContext } from 'react'
import moment from 'moment'

const Wrapper = styled.div`
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65vw;
  height: 12.5rem;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  box-shadow: ${({ theme }) => theme.styles.boxShadowLight};
  align-self: center;
  overflow-y: scroll;
`

const NotificationBadgesContainer = () => {
  const playlistContext = useContext(PlaylistContext);
  console.log(playlistContext.state.playlists);
  console.log(moment().format('MM/DD/YYYY'));
  return (
    <Wrapper>
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
      <AccountCreatedBadge />
    </Wrapper>
  )
}

export default NotificationBadgesContainer
