import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const MenuWrap = styled.div`
  display: none;

  @media (min-width: 815px) {
    display: flex;
    margin-left: auto;
  }

  &.show {
    position: absolute;
    top: 4.5rem;
    left: 0;
    width: 100%;
    background: ${p => p.theme.primary};
    display: flex;
    flex-direction: column;
  }
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
  padding: 1.5rem;
  transition: all 0.3s;
  border-bottom: 1px dashed #000;

  &:first-child {
    border-top: 1px dashed #000;
  }

  @media (min-width: 815px) {
    border-bottom: none;
  }

  &:hover,
  &.selected {
    background-color: ${p => p.theme.textHighlight};
    color: ${p => p.theme.text};
  }

  &:focus {
    outline: 0;
  }
`;
