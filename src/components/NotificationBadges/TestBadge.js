import styled from 'styled-components'

const Div = styled.div`
  border: solid 1px black;
  width: min-content;
  height: min-content;
  margin: 1rem;
`

const P = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.5rem;
  width: 7.5rem;
`

const TestBadge = () => (
  <Div><P>Badge!</P></Div>
)

export default TestBadge
