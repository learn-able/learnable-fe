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

const P = styled.p`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  position: absolute;
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 0.85rem;
  padding-top: 1rem;
`;

const Wrapper = styled.div`
  width: min-content;
  position: relative;

  p {
    display: none;
  }

  &:hover {
    & > * {
      display: block;
    }
  }
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

const AppNav = ({ switchView, view }) => (
  <Nav>
    <Wrapper>
      <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <AddIcon fontSize="large" />
      </Button>
      <P>Add new playlist</P>
    </Wrapper>
    <Wrapper>
      <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => switchView(!view)}>
        <ViewHeadlineIcon fontSize="large" />
      </Button>
      <P>Toggle views</P>
    </Wrapper>
    <Wrapper>
      <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <ArchiveIcon fontSize="large" />
      </Button>
      <P>Show archived</P>
    </Wrapper>
  </Nav>
);

export default AppNav;
