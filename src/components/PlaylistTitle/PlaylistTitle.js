import styled from 'styled-components'

const calculatePercentComplete = (arr) => {
  if (arr.length) {
    const completedItems = arr.filter(item => item.isComplete === true);
    return (completedItems / arr.length).toFixed();
  } else {
    return 0;
  }
}

const Div = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  justify-content: space-between;
`

const Span = styled.span`
  font-weight: 500;
`

const PlaylistTitle = ({ title, playlistItems }) => {
  return (
    <Div>
      {calculatePercentComplete(playlistItems) + "%"}
      <Span>
        { title }
      </Span>
    </Div>)

}

export default PlaylistTitle
