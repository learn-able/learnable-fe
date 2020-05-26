import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'

const Div = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grayDarker};
  display: flex;
  margin: 0.5rem 0;
  min-height: ${({ theme }) => theme.spacers.md};
  border-radius: ${({ theme }) => theme.styles.borderRadius};
`

const PlaylistItem = ({ isComplete, title, url}) => {
  return (
    <Div>
      <Checkbox
        checked={isComplete}
        onChange={console.log('test')}
        name="checkbox"
        color="primary"
      />
      <p>{ title }</p>
    </Div>
  )
}

export default PlaylistItem
