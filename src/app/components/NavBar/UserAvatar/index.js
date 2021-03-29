import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectUser } from 'app/pages/LoginPage/LoginForm/slice/selectors';
import { selectThemeKey } from 'styles/theme/slice/selectors';
import { useLoginSlice } from 'app/pages/LoginPage/LoginForm/slice';

import { ReactComponent as AccountIconBlack } from '../assets/account_circle_black_24dp.svg';
import { ReactComponent as AccountIconWhite } from '../assets/account_circle_white_24dp.svg';
import { StyleConstants } from 'styles/StyleConstants';

export function UserAvatar() {
  const [open, setOpen] = React.useState(false);
  const user = useSelector(selectUser);
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();
  const { actions } = useLoginSlice();

  const handleClick = () => {
    setOpen(open => !open);
  };

  const handleLogout = () => {
    dispatch(actions.logout());
  };

  React.useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <Container>
      <Wrapper onClick={handleClick}>
        <Img>
          {user.url && <img src={user.url} alt={user.name} />}
          {theme === 'light' ? <AccountIconBlack /> : <AccountIconWhite />}
        </Img>
        <Name>{user.name}</Name>
      </Wrapper>
      {open && (
        <Popup>
          <Link to="/dashboard" title="Dashboard">
            Dashboard
          </Link>
          <button onClick={handleLogout} title="Login">
            Logout
          </button>
        </Popup>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  height: ${StyleConstants.NAV_BAR_HEIGHT};
`;

const Wrapper = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Popup = styled.div`
  position: absolute;
  background: ${p => p.theme.background};
  top: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    padding: 1rem;
    text-decoration: none;
    text-align: center;
  }

  button {
    padding: 1rem;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

const Name = styled.p`
  color: ${p => p.theme.primary};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
`;

const Img = styled.div`
  padding-right: 0.5rem;

  svg {
    height: 40px;
    width: 40px;
  }
`;
