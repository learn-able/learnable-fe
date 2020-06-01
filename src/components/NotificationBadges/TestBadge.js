import { motion } from 'framer-motion'
import styled from 'styled-components'

const Div = styled(motion.div)`
  border-radius: 50%;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLighter};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: min-content;
  height: min-content;
  margin: 1rem;
`

const P = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.5rem;
  width: 7.5rem;
`

const TestBadge = () => (
  <Div whileHover={{ scale: 1.1 }}><P>Badge!</P></Div>
)

export default TestBadge
