import * as React from 'react';
import { MenuWrap, MenuItem, MenuLink } from './components/Menu';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/pages/LoginPage/LoginForm/slice/selectors';
import { Hamburger } from '../Hamburger';
import { SearchBar } from './Search';

export function Menu() {
  const { role } = useSelector(selectUser);
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
      <Hamburger
        className="appbar"
        handleClick={handleMenu}
        expanded={isOpen}
      />
      <MenuWrap role="appmenu" className={isOpen && 'show'}>
        <MenuItem role="appmenuitem">
          <MenuLink to="/dashboard">Dashboard</MenuLink>
        </MenuItem>
        <MenuItem role="appmenuitem">
          <MenuLink to="/dashboard/courses" activeClassName="selected">
            Courses
          </MenuLink>
        </MenuItem>
        <MenuItem role="appmenuitem">
          {role === 'admin' && (
            <MenuLink to="/dashboard/users" activeClassName="selected">
              Users
            </MenuLink>
          )}
        </MenuItem>
        <MenuItem role="appmenuitem">
          <SearchBar className="search-mobile" />
        </MenuItem>
      </MenuWrap>
    </>
  );
}
