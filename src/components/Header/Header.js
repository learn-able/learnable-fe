import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: 200;
`

const Div = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.button`
  font-size: 1rem;
  padding: 0 1rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  border: solid 0.5px ${({ theme }) => theme.colors.fontPrimary};
  color: ${({ theme }) => theme.colors.fontPrimary};
  cursor: pointer;
  margin: 0 0 0 0.5rem;
`

const Ul = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
  }
`

const Nav = styled.nav`
  height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.5rem;
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

const Header = () => {
  return (
      <Nav>
        <H1>learnable</H1>
        <Div>
        <Ul>
          <li>about</li>
          <li>pricing</li>
        </Ul>
        <Button>log out</Button>
        </Div>
      </Nav>
  )
}

export default Header;
