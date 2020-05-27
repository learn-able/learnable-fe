import styled from 'styled-components';

const calculatePercentComplete = (arr) => {
  if (arr.length) {
    const completedItems = arr.filter(item => item.is_complete === true);
    return (completedItems.length / arr.length * 100).toFixed();
  } else {
    return 0;
  }
}

const Div = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacers.xs};
  margin-top: ${({ theme }) => theme.spacers.sm};
`;

const Span = styled.span`
  font-weight: 500;
`;

const PlaylistTitle = ({ title, playlistItems }) => (
  <Div>
    {`${calculatePercentComplete(playlistItems)}%`}
    <Span>{title}</Span>
  </Div>
);

export default PlaylistTitle;
