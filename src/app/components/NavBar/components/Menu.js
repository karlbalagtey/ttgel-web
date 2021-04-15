import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components/macro';

export const Menu = styled.nav`
  background-color: ${p => p.theme.background};
  flex-direction: column;

  @media (min-width: 1008px) {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    padding: 20px;
  }
`;

export const MenuWrap = styled.ul`
  display: none;

  &.is-mobile {
    position: absolute;
    top: ${StyleConstants.NAV_BAR_HEIGHT};
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${p => p.theme.background};
    margin: 0;
    right: 0;

    @media (min-width: 700px) {
      width: 30%;
    }
  }

  @media (min-width: 1008px) {
    display: flex;
    flex-direction: row;
    margin: 0;
    align-items: center;
  }
`;

export const MenuItem = styled.li`
  display: flex;
`;

export const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  padding: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: ${p => p.theme.textHighlight};
  }

  &:active {
    opacity: 0.4;
  }

  @media (min-width: 1008px) {
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    align-items: center;
  }
`;
