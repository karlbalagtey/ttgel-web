import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/pages/LoginPage/LoginForm/slice/selectors';
import { Menu, MenuLink } from './components/Menu';
import { Title } from './components/Title';
import { SearchBar } from './Search';

import styled from 'styled-components';

export function AppBar({ title }) {
  const { role } = useSelector(selectUser);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <SearchBar />
      <Menu>
        <MenuLink to="/dashboard">Dashboard</MenuLink>
        <MenuLink to="/dashboard/courses" activeClassName="selected">
          Courses
        </MenuLink>
        {role === 'admin' && (
          <MenuLink to="/dashboard/users" activeClassName="selected">
            Users
          </MenuLink>
        )}
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  background: ${p => p.theme.primary};
  display: flex;
  align-items: center;
`;
