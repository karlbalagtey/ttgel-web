import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { ThemeSwitch } from './ThemeSwitch';
import { Hamburger } from './Hamburger';
import { StyleConstants } from 'styles/StyleConstants';
import { selectUser } from 'app/pages/LoginPage/LoginForm/slice/selectors';
import { UserAvatar } from './UserAvatar';

export function Nav() {
  const user = useSelector(selectUser);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      const isMobile = window.innerWidth < 1008;
      if (isMobile) {
        setIsOpen(false);
      }
    });
  });

  return (
    <>
      <Menu className={isOpen && 'show'}>
        {user ? (
          <>
            <ThemeSwitch />
            <UserAvatar />
          </>
        ) : (
          <>
            <Item href="#course-overview" title="Course Overview">
              Course Overview
            </Item>
            <Item href="#course-details" title="Course Details">
              Course Details
            </Item>
            <Item href="/signup" title="Sign Up">
              Signup
            </Item>
            <Item href="/login" title="Login">
              Login
            </Item>
          </>
        )}
      </Menu>
      <GroupButton>
        <Hamburger handleClick={handleMenu} />
        {!user && <ThemeSwitch />}
      </GroupButton>
    </>
  );
}

const GroupButton = styled.div`
  display: flex;
`;

const Menu = styled.nav`
  display: none;

  &.show {
    background-color: ${p => p.theme.background};
    position: absolute;
    top: ${StyleConstants.NAV_BAR_HEIGHT};
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: -1.5rem;
  }

  @media (min-width: 1008px) {
    display: flex;
    flex-direction: row;
    margin-left: auto;
  }
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  padding: 1.5rem;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: ${p => p.theme.textHighlight};
    outline: 0;
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
