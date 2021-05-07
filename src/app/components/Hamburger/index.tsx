import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { ReactComponent as DarkMenuIcon } from './assets/menu_black_24dp.svg';
import { ReactComponent as WhiteMenuIcon } from './assets/menu_white_24dp.svg';
import { selectThemeKey } from 'styles/theme/slice/selectors';

interface HamburgerProps {
  handleClick: () => void;
  className: string;
  expanded: boolean;
}

export const Hamburger: React.FC<HamburgerProps> = ({
  handleClick,
  className,
  expanded,
}) => {
  const [selected, setSelected] = React.useState('light');
  const theme = useSelector(selectThemeKey);

  React.useEffect(() => {
    setSelected(theme);
  }, [theme]);

  return (
    <Button
      aria-haspopup="true"
      aria-expanded={expanded}
      onClick={handleClick}
      className={className}
    >
      <span className="sr-only">Menu</span>
      {selected === 'light' ? <DarkMenuIcon /> : <WhiteMenuIcon />}
    </Button>
  );
}

const Button = styled.button`
  border: 0;
  background-color: transparent;
  padding: 20px;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    svg {
      transition: fill 0.2s;
      fill: ${p => p.theme.textHighlight};
    }
  }

  &.navbar {
    @media (min-width: 1008px) {
      display: none;
    }
  }

  &.appbar {
    svg {
      fill: #fff;
    }

    @media (min-width: 815px) {
      display: none;
    }
  }
`;
