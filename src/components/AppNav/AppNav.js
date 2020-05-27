import { motion } from 'framer-motion';
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #F9F9F9;
  padding: 1rem 2.5rem;
`

const Button = styled(motion.button)`
  border-radius: 50%;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 1rem;
  cursor: pointer;
`

const buttons = [
  {label: <AddIcon fontSize="large" />},
  {label: <NotificationsIcon fontSize="large" />},
  {label: <HelpOutlineIcon fontSize="large" />},
]

const AppNav = () => {
  return (
    <Nav >
      {buttons.map(b => <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>{b.label}</Button>)}
    </Nav>
  )
}

export default AppNav
