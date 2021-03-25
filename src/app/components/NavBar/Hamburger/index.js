import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { ReactComponent as DarkMenuIcon } from '../assets/menu_black_24dp.svg';
import { ReactComponent as WhiteMenuIcon } from '../assets/menu_white_24dp.svg';
import { selectThemeKey } from 'styles/theme/slice/selectors';

export function Hamburger({ handleClick }) {
  const [selected, setSelected] = React.useState('light');
  const theme = useSelector(selectThemeKey);

  React.useEffect(() => {
    setSelected(theme);
  }, [theme]);

  return (
    <Button onClick={handleClick}>
      <span className="sr-only">Menu</span>
      {selected === 'light' ? <DarkMenuIcon /> : <WhiteMenuIcon />}
    </Button>
  );
}

const Button = styled.button`
  border: 0;
  background-color: transparent;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    svg {
      transition: fill 0.2s;
      fill: ${p => p.theme.textHighlight};
    }
  }

  @media (min-width: 1008px) {
    display: none;
  }
`;
