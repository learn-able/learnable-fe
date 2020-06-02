import { motion } from 'framer-motion';
import styled from 'styled-components';
import AddBoxIcon from '@material-ui/icons/AddBox';

const Div = styled(motion.div)`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  margin: 1rem;
  height: 7.5rem;
  width: 7.5rem;
  flex-shrink: 0;
`;

const P = styled.p`
  text-align: center;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

const AccountCreatedBadge = () => (
  <Div whileHover={{ scale: 1.1 }}>
    <AddBoxIcon fontSize="large" style={{ fill: '#f39c12' }} />
    <P>
      Account
      <br />
      created
    </P>
  </Div>
);

export default AccountCreatedBadge;
