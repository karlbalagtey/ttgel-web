import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function AppBar() {
  return (
    <Wrapper>
      <Menu>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/users">Users</Link>
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  background: ${p => p.theme.primary};
`;

const Menu = styled.div`
  display: flex;
  margin-left: auto;

  a {
    text-decoration: none;
    font-size: 1rem;
    color: #fff;
    padding: 1.5rem;
    transition: all 0.3s;

    &:hover {
      background-color: ${p => p.theme.textHighlight};
      color: ${p => p.theme.text};
    }
  }
`;
