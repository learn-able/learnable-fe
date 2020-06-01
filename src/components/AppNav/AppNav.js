import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ArchiveIcon from '@material-ui/icons/Archive';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #f9f9f9;
  padding: 1rem 2.5rem;
`;

const Button = styled(motion.button)`
  border-radius: 50%;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontPrimary};
  background: #f9f9f9;
`;

const buttons = [
  { label: <AddIcon fontSize="large" />, title: 'addIcon' },
  {
    label: <ViewHeadlineIcon fontSize="large" />,
    title: 'notifications',
  },
  { label: <ArchiveIcon fontSize="large" />, title: 'archive' },
];

const AppNav = () => (
  <Nav>
    {buttons.map((b) => (
      <Button
        key={b.title}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {b.label}
      </Button>
    ))}
  </Nav>
);

export default AppNav;
