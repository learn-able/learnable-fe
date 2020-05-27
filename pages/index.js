import Header from '../src/components/Header/Header'
import Head from 'next/head';
import styled from 'styled-components';
import PlaylistProvider from '../src/contexts/playlistContext';
import PlaylistsContainer from '../src/components/PlaylistsContainer/PlaylistsContainer';

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Learnable</title>
      </Head>
      <PlaylistProvider>
        <MainWrapper>
          <PlaylistsContainer />
        </MainWrapper>
      </PlaylistProvider>
    </>
  );
}
