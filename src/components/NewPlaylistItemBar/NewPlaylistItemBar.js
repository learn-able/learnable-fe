import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const Article = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
`;

const Button = styled.button.attrs(() => {
  'button';
})`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: ease-in-out 0.1s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fontPrimary};
  }
`;

const PlaylistItemCount = styled.span`
  background-color: ${({ theme }) => theme.colors.grayLighter};
  border-radius: 2rem;
  -moz-border-radius: 2rem;
  color: ${({ theme }) => theme.colors.fontPrimary};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  width: 2rem;
`;

const Span = styled.span`
  font-weight: 200;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const NewPlaylistItemBar = ({
  nextStep,
  playlistItemURL,
  playlistItems,
  setPlaylistItemURL,
}) => {
  const [inputActive, toggleInputActive] = useState(false);
  const onItemSubmit = () => {
    nextStep();
    toggleInputActive(false);
  };

  return (
    <Article>
      <Div>
        <PlaylistItemCount>{playlistItems.length}</PlaylistItemCount>
        <Button onClick={() => toggleInputActive(!inputActive)}>
          {inputActive ? <Span>- close</Span> : <Span>+ new item</Span>}
        </Button>
      </Div>

      {inputActive && (
        <Input
          id="item"
          hasButton
          label="Item"
          onButtonClick={() => onItemSubmit()}
          onChangeHandler={(e) => setPlaylistItemURL(e.target.value)}
          placeholder="now, add an item URL:"
          type="text"
          value={playlistItemURL}
        />
      )}
    </Article>
  );
};

NewPlaylistItemBar.defaultProps = {
  playlistItems: [],
};

NewPlaylistItemBar.propTypes = {
  playlistItems: PropTypes.arrayOf(PropTypes.object),
};

export default NewPlaylistItemBar;
