import AppNav from '../../src/components/AppNav/AppNav'
import Header from '../../src/components/Header/Header'
import Head from 'next/head';
import styled from 'styled-components';
import NotificationsContainer from '../../src/components/NotificationsContainer/NotificationsContainer'
import NotificationBadgesContainer from '../../src/components/NotificationBadgesContainer/NotificationBadgesContainer'
import PlaylistProvider from '../../src/contexts/playlistContext';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  width: 100vw;
  padding-top: 2.5rem;
`;

export default function Notifications() {
  return (
    <>
      <Head>
        <title>Learnable</title>
      </Head>
      <PlaylistProvider>
      <Header />
        <MainWrapper>
          <NotificationBadgesContainer />
          <NotificationsContainer />
        </MainWrapper>
      </PlaylistProvider>
    </>
  );
}
