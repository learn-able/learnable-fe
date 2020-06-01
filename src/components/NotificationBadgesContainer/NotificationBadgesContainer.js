import styled from 'styled-components'
import TestBadge from '../NotificationBadges/TestBadge'

const Wrapper = styled.div`
  background: #f9f9f9;
  width: 65vw;
  padding-top: 2.5rem;
  height: 40rem;
  align-self: center;
  display: flex;
  overflow-y: scroll;
`

const NotificationBadgesContainer = () => (
  <Wrapper>
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
    <TestBadge />
  </Wrapper>
)

export default NotificationBadgesContainer
