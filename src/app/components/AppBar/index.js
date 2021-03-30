import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/pages/LoginPage/LoginForm/slice/selectors';
import styled from 'styled-components';

export function AppBar({ title }) {
  const { role } = useSelector(selectUser);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Menu>
        <NavLink to="/dashboard" activeClassName="selected">
          Dashboard
        </NavLink>
        <NavLink to="/courses" activeClassName="selected">
          Courses
        </NavLink>
        {role === 'admin' && (
          <NavLink to="/users" activeClassName="selected">
            Users
          </NavLink>
        )}
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  background: ${p => p.theme.backgroundDarker};
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.3rem;
  margin-right: auto;
  padding: 0 1.5rem;
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

    &:hover,
    &.selected {
      background-color: ${p => p.theme.textHighlight};
      color: ${p => p.theme.text};
    }

    &:focus {
      outline: 0;
    }
  }
`;
