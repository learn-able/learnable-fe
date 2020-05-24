import Head from 'next/head';
import styled from 'styled-components';
import PlaylistsContainer from '../src/components/PlaylistsContainer/PlaylistsContainer';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 50px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Learnable</title>
      </Head>
      <Title>My page</Title>
      <PlaylistsContainer />
    </>
  );
}
