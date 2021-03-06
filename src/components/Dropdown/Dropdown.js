import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Router from 'next/router';
import { PlaylistContext } from '../../contexts/playlistContext';

const options = ['Archive', 'Delete', 'Go to page'];
const ITEM_HEIGHT = 48;

export default function Dropdown({ dueDate, isFavorite, playlistId, title }) {
  const playlistContext = useContext(PlaylistContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (option) => {
    if (option === 'Archive') {
      playlistContext.patchPlaylist(playlistId, {
        due_date: dueDate,
        is_favorite: isFavorite,
        status: 'archived',
        title,
      });
    }

    if (option === 'Delete') {
      playlistContext.deletePlaylist(playlistId);
    }

    if (option === 'Go to page') {
      Router.push(`/app/playlist/${playlistId}`);
    }

    setAnchorEl(null);
  };

  return (
    <Div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Div>
  );
}

const Div = styled.div`
  position: absolute;
  right: 0;
  transform: rotate(90deg);
  top: 0;
`;

Dropdown.propTypes = {
  dueDate: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  playlistId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
