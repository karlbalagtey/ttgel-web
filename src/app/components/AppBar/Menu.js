import * as React from 'react';
import { MenuWrap, MenuLink } from './components/Menu';
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
      <MenuWrap className={isOpen && 'show'}>
        <MenuLink to="/dashboard">Dashboard</MenuLink>
        <MenuLink to="/dashboard/courses" activeClassName="selected">
          Courses
        </MenuLink>
        {role === 'admin' && (
          <MenuLink to="/dashboard/users" activeClassName="selected">
            Users
          </MenuLink>
        )}
        <SearchBar className="search-mobile" />
      </MenuWrap>
      <Hamburger className="appbar" handleClick={handleMenu} />
    </>
  );
}
