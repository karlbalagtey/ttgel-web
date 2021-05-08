import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useLoginSlice } from 'app/pages/LoginPage/LoginForm/slice';
import { selectThemeKey } from 'styles/theme/slice/selectors';

import { ReactComponent as DashboardIconBlack } from '../assets/dashboard_black_24dp.svg';
import { ReactComponent as LogoutIconBlack } from '../assets/power_settings_new_black_24dp.svg';
import { ReactComponent as DashboardIconWhite } from '../assets/dashboard_white_24dp.svg';
import { ReactComponent as LogoutIconWhite } from '../assets/power_settings_new_white_24dp.svg';
import { Popup, MenuItem } from './styles';

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
        <button onClick={() => dispatch(actions.logout(''))} title="Login">
          {theme === 'light' ? <LogoutIconBlack /> : <LogoutIconWhite />}{' '}
          <p>Logout</p>
        </button>
      </MenuItem>
    </Popup>
  );
}