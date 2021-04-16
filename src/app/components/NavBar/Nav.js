import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitch } from './ThemeSwitch';
import { Hamburger } from '../Hamburger';
import { selectUser } from 'app/pages/LoginPage/LoginForm/slice/selectors';
import { UserAvatar } from './UserAvatar';
import { Menu, MenuWrap, MenuItem, Item } from './components/Menu';

export function Nav() {
  const user = useSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      const isMobile = window.innerWidth < 1008;
      if (isMobile) {
        setIsOpen(false);
      }
    });
  });

  return (
    <Menu aria-label="Main Navigation">
      <Hamburger
        className="navbar"
        handleClick={handleMenu}
        expanded={isOpen}
      />
      {user ? (
        <MenuWrap className={isOpen && 'is-mobile'} role="menu">
          <MenuItem role="menuitem">
            <ThemeSwitch />
          </MenuItem>
          <MenuItem role="menuitem">
            <UserAvatar isMobile={isOpen} />
          </MenuItem>
        </MenuWrap>
      ) : (
        <MenuWrap className={isOpen && 'is-mobile'} role="menu">
          <MenuItem role="menuitem">
            <Item href="#course-overview" title="Course Overview">
              Course Overview
            </Item>
          </MenuItem>
          <MenuItem role="menuitem">
            <Item href="#course-details" title="Course Details">
              Course Details
            </Item>
          </MenuItem>
          <MenuItem role="menuitem">
            <Item href="/signup" title="Sign Up">
              Signup
            </Item>
          </MenuItem>
          <MenuItem role="menuitem">
            <Item href="/login" title="Login">
              Login
            </Item>
          </MenuItem>
          <MenuItem role="menuitem">
            <ThemeSwitch />
          </MenuItem>
        </MenuWrap>
      )}
    </Menu>
  );
}
