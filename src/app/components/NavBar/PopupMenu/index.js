import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useLoginSlice } from 'app/pages/LoginPage/LoginForm/slice';
import { selectThemeKey } from 'styles/theme/slice/selectors';

import { ReactComponent as DashboardIconBlack } from '../assets/dashboard_black_24dp.svg';
import { ReactComponent as LogoutIconBlack } from '../assets/power_settings_new_black_24dp.svg';
import { ReactComponent as DashboardIconWhite } from '../assets/dashboard_white_24dp.svg';
import { ReactComponent as LogoutIconWhite } from '../assets/power_settings_new_white_24dp.svg';
import { MenuItem } from '../components/Menu';
import { StyleConstants } from 'styles/StyleConstants';

export function PopupMenu() {
  const dispatch = useDispatch();
  const { actions } = useLoginSlice();
  const theme = useSelector(selectThemeKey);

  return (
    <Popup>
      <MenuItem>
        <Link to="/dashboard" title="Dashboard">
          {theme === 'light' ? <DashboardIconBlack /> : <DashboardIconWhite />}{' '}
          <p>Dashboard</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <button onClick={() => dispatch(actions.logout())} title="Login">
          {theme === 'light' ? <LogoutIconBlack /> : <LogoutIconWhite />}{' '}
          <p>Logout</p>
        </button>
      </MenuItem>
    </Popup>
  );
}

const Popup = styled.nav`
  position: absolute;
  background: ${p => p.theme.background};
  border: 1px solid ${p => p.theme.border};
  border-top: 0;
  top: ${StyleConstants.NAV_BAR_HEIGHT};
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 165px;
  box-shadow: 6px 7px 7px -6px;

  a {
    text-decoration: none;
    display: flex;
    width: 100%;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    text-align: left;
    display: flex;
    width: 100%;
  }

  p {
    margin-left: 1rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  svg,
  p {
    transition: all 0.4s;
  }

  a,
  button {
    color: ${p => p.theme.text};
    padding: 1rem;

    &:hover {
      p {
        color: ${p => p.theme.textHighlight};
      }
      svg {
        fill: ${p => p.theme.textHighlight};
      }
    }
  }
`;
