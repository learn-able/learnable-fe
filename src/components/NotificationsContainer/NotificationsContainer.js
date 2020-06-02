import styled from 'styled-components';
import Notification from '../Notification/Notification';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  height: 45rem;
  overflow: scroll;
  margin: 2rem 0;
`;

const NotificationsContainer = () => (
  <Wrapper>
    <Notification />
    <Notification />
    <Notification />
    <Notification />
    <Notification />
    <Notification />
    <Notification />
    <Notification />
    <Notification />
    <Notification />
    <Notification />
  </Wrapper>
);

export default NotificationsContainer;
