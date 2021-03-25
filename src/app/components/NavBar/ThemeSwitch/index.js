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

  const handleThemeChange = value => {
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
        <Button value="dark" onSelect={handleThemeChange}>
          <span className="sr-only">Dark</span>
          <DarkModeIcon value="dark" />
        </Button>
      ) : (
        <Button value="light" onSelect={handleThemeChange}>
          <span className="sr-only">Light</span>
          <LightModeIcon value="light" />
        </Button>
      )}
    </>
  );
}
