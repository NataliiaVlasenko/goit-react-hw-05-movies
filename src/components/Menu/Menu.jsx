
import { Container, MenuList, Link } from './Menu.styled';

export const Menu = () => {
  return (
    <Container>
      <MenuList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </MenuList>
    </Container>
  );
};
