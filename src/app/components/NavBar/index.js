import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { StyleConstants } from 'styles/StyleConstants';
import { Nav } from './Nav';

export const NavBar = () => (
  <Wrapper>
    <Logo />
    <Nav />
  </Wrapper>
);

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;
`;
