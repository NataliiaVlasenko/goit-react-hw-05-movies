import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding: 20px;

  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
 
  width: 100%;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: inline-block;

  padding: 20px;

  &.active {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  }
  :hover {
    color: blue;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;
