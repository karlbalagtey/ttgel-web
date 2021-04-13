import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { ThemeSwitch } from './ThemeSwitch';
import { Hamburger } from '../Hamburger';
import { selectUser } from 'app/pages/LoginPage/LoginForm/slice/selectors';
import { UserAvatar } from './UserAvatar';
import { Menu, MenuWrap, MenuItem, Item } from './components/Menu';

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
          <MenuWrap>
            <MenuItem>
              <ThemeSwitch />
            </MenuItem>
            <MenuItem>
              <UserAvatar />
            </MenuItem>
          </MenuWrap>
        ) : (
          <MenuWrap>
            <MenuItem>
              <Item href="#course-overview" title="Course Overview">
                Course Overview
              </Item>
            </MenuItem>
            <MenuItem>
              <Item href="#course-details" title="Course Details">
                Course Details
              </Item>
            </MenuItem>
            <MenuItem>
              <Item href="/signup" title="Sign Up">
                Signup
              </Item>
            </MenuItem>
            <MenuItem>
              <Item href="/login" title="Login">
                Login
              </Item>
            </MenuItem>
          </MenuWrap>
        )}
      </Menu>
      <GroupButton>
        <Hamburger className="navbar" handleClick={handleMenu} />
        {!user && <ThemeSwitch />}
      </GroupButton>
    </>
  );
}

export const GroupButton = styled.div`
  display: flex;
`;
