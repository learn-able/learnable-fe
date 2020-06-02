import AppNav from '../src/components/AppNav/AppNav'
import Header from '../src/components/Header/Header'
import Head from 'next/head';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { AppSettingsContext } from '../src/contexts/appSettingsContext';
import PlaylistProvider from '../src/contexts/playlistContext';
import PlaylistsContainer from '../src/components/PlaylistsContainer/PlaylistsContainer';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
`;

export default function Home() {
  const [view, switchView] = useState(true);
    const appSettingsContext = useContext(AppSettingsContext);

  return (
    <>
      <Head>
        <title>Learnable</title>
      </Head>
      <PlaylistProvider>
      {console.log(appSettingsContext)}
      <Header />
        <MainWrapper>
          <AppNav view={view} switchView={switchView} />
          <PlaylistsContainer view={view} />
        </MainWrapper>
      </PlaylistProvider>
    </>
  );
}
