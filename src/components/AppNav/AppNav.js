import Link from 'next/link'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ArchiveIcon from '@material-ui/icons/Archive'

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
  color: ${({ theme }) => theme.colors.fontPrimary};
`

const buttons = [
  {label: <AddIcon fontSize="large" />},
  {label: <Link href="/app/Notifications"><NotificationsIcon fontSize="large" /></Link>},
  {label: <ArchiveIcon fontSize="large" />},
]

const AppNav = () => {
  return (
    <Nav >
      {buttons.map(b => <Button key={b.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>{b.label}</Button>)}
    </Nav>
  )
}

export default AppNav
