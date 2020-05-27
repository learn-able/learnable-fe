import styled from 'styled-components';

const P = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacers.xs};
  text-align: right;
`;

const DueDate = ({ dueDate }) => (
  <div>
    <P>Due: {dueDate}</P>
  </div>
);

export default DueDate;
