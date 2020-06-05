import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { useState, useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ArchiveIcon from '@material-ui/icons/Archive';
import { AppSettingsContext } from '../../contexts/appSettingsContext';
import { PlaylistContext } from '../../contexts/playlistContext';

const AppNav = () => {
  const [hover, setHover] = useState(null);
  const appSettingsContext = useContext(AppSettingsContext);
  const { archiveView, view } = appSettingsContext.state;
  const { switchArchiveView, switchView } = appSettingsContext;

  const playlistContext = useContext(PlaylistContext);
  const { playlists } = playlistContext.state;
  let cancel = false;

  if (playlists.length) {
    cancel = !playlists[playlists.length - 1].id;
  }

  const handleAdd = () => {
    playlistContext.addPlaylist({
      id: null,
      title: '',
      user_id: 1,
      status: 'valid',
      due_date: '',
      playlist_items: [],
    });
  };

  const handleCancel = () => {
    playlistContext.cancelAdd();
  };

  const handleSwitchView = (callback) => {
    if (cancel) {
      handleCancel();
    }

    callback();
  };

  return (
    <Nav>
      {<H2>{!appSettingsContext.state.archiveView ? 'CURRENT' : 'ARCHIVED'}</H2>}
      <Div>
      <Wrapper onMouseEnter={() => setHover('AddIcon')}>
        <Button
          aria-label="add new playlist"
          disabled={!view || archiveView}
          onClick={cancel ? () => handleCancel() : () => handleAdd()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {cancel ? <RemoveIcon /> : <AddIcon />}
        </Button>
        {hover === 'AddIcon' ? (
          <P
            view={view}
            variants={variants}
            initial="disabled"
            animate="active"
          >
            {cancel ? 'Cancel' : 'New playlist'}
          </P>
        ) : null}
      </Wrapper>
      <Wrapper onMouseEnter={() => setHover('ViewIcon')}>
        <Button
          aria-label="card view"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSwitchView(switchView)}
        >
          {view === true ? (
            <ViewHeadlineIcon />
          ) : (
            <ViewWeekIcon fontSize="large" />
          )}
        </Button>
        {hover === 'ViewIcon' ? (
          <P
            id="view-text"
            view={view}
            variants={variants}
            initial="disabled"
            animate="active"
          >
            Toggle views
          </P>
        ) : null}
      </Wrapper>
      <Wrapper onMouseEnter={() => setHover('ArchiveIcon')}>
        <ArchiveButton
          aria-label="archive view"
          onClick={() => handleSwitchView(switchArchiveView)}
          whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.95 }}
          view={appSettingsContext.state.archiveView}
        >
          <ArchiveIcon />
        </ArchiveButton>
        {hover === 'ArchiveIcon' ? (
          <P
            id="archive-text"
            view={view}
            variants={variants}
            initial="disabled"
            animate="active"
          >
            Show archived
          </P>
        ) : null}
      </Wrapper>
      </Div>
    </Nav>
  );
};

const H2 = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  padding-left: 1rem;
  align-self: flex-end;
`

const ArchiveButton = styled(motion.button)`
  border-radius: 50%;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontPrimary};
  background: #f9f9f9;

  ${({ view }) =>
    view &&
    css`
      border: 0.5px solid ${({ theme }) => theme.colors.grayLight};
      box-shadow: inset 0px 0px 15px rgba(0,0,0,0.25);
    `}
`;

const Button = styled(motion.button)`
  border-radius: 50%;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontPrimary};
  background: #f9f9f9;

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => theme.colors.grayLighter};
      color: ${({ theme }) => theme.colors.grayLight};

      &:hover {
        cursor: auto;
      }
    `}
`;

const Div = styled.div`
  display: flex;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 1rem 2.5rem;
`;

const P = styled(motion.p)`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  height: 2.5rem;
  transform-origin: top;
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 0.75rem;

  ${({ view }) =>
    !view &&
    css`
      position: absolute;
    `}
`;

const Wrapper = styled.div`
  width: min-content;
  position: relative;

  p {
    display: none;
  }
`;

const variants = {
  active: {
    y: 1,
    opacity: 1,
    transition: {
      damping: 500,
      duration: 0.1,
    },
  },
  disabled: {
    y: -25,
    opacity: -0.5,
  },
};

export default AppNav;
