import * as React from 'react';
import { themeActions } from 'styles/theme/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'styles/theme/utils';
import { selectThemeKey } from 'styles/theme/slice/selectors';

import { ReactComponent as DarkModeIcon } from '../assets/dark_mode_black_24dp.svg';
import { ReactComponent as LightModeIcon } from '../assets/light_mode_white_24dp.svg';
import { Button } from './Button';

export function ThemeSwitch() {
  const [selected, setSelected] = React.useState('light');
  const dispatch = useDispatch();
  const theme = useSelector(selectThemeKey);

  const handleThemeChange = (value: string) => {
    setSelected(value);
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  React.useEffect(() => {
    setSelected(theme);
  }, [selected, theme]);

  return (
    <>
      {selected === 'light' ? (
        <Button onClick={() => handleThemeChange('dark')} title="Dark mode">
          <DarkModeIcon />
          <span className="sr-only">Dark</span>
          <p>Dark mode</p>
        </Button>
      ) : (
        <Button onClick={() => handleThemeChange('light')} title="Light mode">
          <LightModeIcon />
          <span className="sr-only">Light</span>
          <p>Light mode</p>
        </Button>
      )}
    </>
  );
}
