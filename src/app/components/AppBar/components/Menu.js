import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Menu = styled.div`
  display: flex;
  margin-left: auto;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
  padding: 1.5rem;
  transition: all 0.3s;

  &:hover,
  &.selected {
    background-color: ${p => p.theme.textHighlight};
    color: ${p => p.theme.text};
  }

  &:focus {
    outline: 0;
  }
`;
