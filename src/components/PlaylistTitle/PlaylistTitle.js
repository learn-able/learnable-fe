import styled from 'styled-components'

const Div = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`

const PlaylistTitle = ({ title }) => {
  return <Div><span>50%</span>{ title }</Div>
}

export default PlaylistTitle
