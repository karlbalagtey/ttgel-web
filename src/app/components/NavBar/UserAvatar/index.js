import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUser } from 'app/pages/LoginPage/LoginForm/slice/selectors';
import { selectThemeKey } from 'styles/theme/slice/selectors';

import { PopupMenu } from '../PopupMenu';
import { ReactComponent as AccountIconBlack } from '../assets/account_circle_black_24dp.svg';
import { ReactComponent as AccountIconWhite } from '../assets/account_circle_white_24dp.svg';

import { StyleConstants } from 'styles/StyleConstants';

export function UserAvatar() {
  const [open, setOpen] = React.useState(false);
  const user = useSelector(selectUser);
  const theme = useSelector(selectThemeKey);

  const handleClick = () => {
    setOpen(open => !open);
  };

  return (
    <Container>
      <Wrapper onClick={handleClick}>
        <Img>
          {user.url && <img src={user.url} alt={user.name} />}
          {theme === 'light' ? <AccountIconBlack /> : <AccountIconWhite />}
        </Img>
        <Name>{user.name}</Name>
      </Wrapper>
      {open && <PopupMenu />}
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
  padding: 0;

  &:hover,
  &:focus {
    outline: 0;

    p {
      color: ${p => p.theme.textHighlight};
    }
  }
`;

const Name = styled.p`
  color: ${p => p.theme.primary};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0;
  transition: all 0.4s;
`;

const Img = styled.div`
  padding-right: 0.5rem;

  svg {
    height: 40px;
    width: 40px;
  }
`;
