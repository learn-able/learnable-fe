import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const calculatePercentComplete = (arr) => {
  if (arr.length) {
    const completedItems = arr.filter((item) => item.is_complete === true);
    return ((completedItems.length / arr.length) * 100).toFixed();
  }
  return 0;
};

const Bar = styled.div.attrs({
  'data-testid': 'progressbar',
})`
  height: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

const PercentComplete = styled.div`
  height: 1rem;
  background-color: #2ecc71;
  ${({ percentage }) =>
    css`
      width: ${percentage};
    `}
`;

const ProgressBar = ({ playlistItems }) => (
  <Bar>
    <PercentComplete
      percentage={`${calculatePercentComplete(playlistItems)}%`}
    />
  </Bar>
);

ProgressBar.defaultProps = {
  playlistItems: [],
};

ProgressBar.propTypes = {
  playlistItems: PropTypes.arrayOf(PropTypes.object),
};

export default ProgressBar;
