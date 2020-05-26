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
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const PlaylistItemCount = styled.span`
  background-color: ${({ theme }) => theme.colors.grayLight};
  border-radius: 2rem;
  -moz-border-radius: 2rem;
  color: ${({ theme }) => theme.colors.garyDarker};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  width: 2rem;
`;

const Span = styled.span`
  font-style: italic;
`;

const NewPlaylistItemBar = ({
  nextStep,
  playlistItem,
  playlistItems,
  onChangeHandler,
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
          + <Span>new item</Span>
        </Button>
      </Div>

      {inputActive && (
        <Input
          id="item"
          hasButton
          label="Item"
          onButtonClick={() => onItemSubmit()}
          onChangeHandler={(e) => onChangeHandler(e.target.value)}
          placeholder="now, add an item URL:"
          type="text"
          value={playlistItem}
        />
      )}
    </Article>
  );
};

NewPlaylistItemBar.propTypes = {
  playlistItems: PropTypes.arrayOf(PropTypes.object),
};

export default NewPlaylistItemBar;
