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

import { StyleConstants } from 'styles/StyleConstants';

export function PopupMenu() {
  const dispatch = useDispatch();
  const { actions } = useLoginSlice();
  const theme = useSelector(selectThemeKey);

  const handleLogout = () => {
    dispatch(actions.logout());
  };

  return (
    <Popup>
      <Link to="/dashboard" title="Dashboard">
        {theme === 'light' ? <DashboardIconBlack /> : <DashboardIconWhite />}{' '}
        <span>Dashboard</span>
      </Link>
      <button onClick={handleLogout} title="Login">
        {theme === 'light' ? <LogoutIconBlack /> : <LogoutIconWhite />}{' '}
        <span>Logout</span>
      </button>
    </Popup>
  );
}

const Popup = styled.div`
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
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    text-align: left;
  }

  span {
    margin-left: 1rem;
  }

  svg,
  span {
    transition: all 0.4s;
  }

  a,
  button {
    color: ${p => p.theme.text};
    padding: 1rem;

    &:hover,
    &:focus {
      outline: 0;

      span {
        color: ${p => p.theme.textHighlight};
      }
      svg {
        fill: ${p => p.theme.textHighlight};
      }
    }
  }
`;
