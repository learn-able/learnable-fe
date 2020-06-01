import styled from 'styled-components';
import { useContext } from 'react';
import moment from 'moment';
import AccountCreatedBadge from '../NotificationBadges/AccountCreated';
import { PlaylistContext } from '../../contexts/playlistContext';

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
`;

const NotificationBadgesContainer = () => {
  const playlistContext = useContext(PlaylistContext);
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
  );
};

export default NotificationBadgesContainer;
