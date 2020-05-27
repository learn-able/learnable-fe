import styled from 'styled-components';
import PropTypes from 'prop-types';

const P = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacers.xs};
  text-align: right;
`;

const DueDate = ({ dueDate }) => <P>Due: {dueDate}</P>;

DueDate.propTypes = {
  dueDate: PropTypes.string.isRequired,
};

export default DueDate;
