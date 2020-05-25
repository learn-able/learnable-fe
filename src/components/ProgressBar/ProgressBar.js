import styled, { css } from 'styled-components';

const calculatePercentComplete = (arr) => {
  if (arr.length) {
    const completedItems = arr.filter(item => item.isComplete === true);
    return (completedItems / arr.length).toFixed();
  } else {
    return 0;
  }
}

const Bar = styled.div`
  height: 1rem;
  width: 100%;
  background-color: ${({theme}) => theme.colors.grayLight};
`

const PercentComplete = styled.div`
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  ${({ percentage }) =>
    css`
      width: ${percentage}
    `
  }
`

const ProgressBar = ({ playlistItems }) => {
  return (
    <Bar>
      <PercentComplete
        percentage={calculatePercentComplete(playlistItems) + "%"}
      />
    </Bar>
  )
}

export default ProgressBar
