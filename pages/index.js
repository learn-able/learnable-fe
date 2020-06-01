import AppNav from '../src/components/AppNav/AppNav'
import Header from '../src/components/Header/Header'
import Head from 'next/head';
import styled from 'styled-components';
import PlaylistProvider from '../src/contexts/playlistContext';
import PlaylistsContainer from '../src/components/PlaylistsContainer/PlaylistsContainer';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  width: 100vw;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Learnable</title>
      </Head>
      <PlaylistProvider>
      <Header />
        <MainWrapper>
          <AppNav />
          <PlaylistsContainer />
        </MainWrapper>
      </PlaylistProvider>
    </>
  );
}
