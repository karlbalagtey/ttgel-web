import * as React from 'react';
import { Title } from './components/Title';
import { SearchBar } from './Search';
import { Button } from './components/Button';
import { Menu } from './Menu';
import { ReactComponent as ArrowBack } from './assets/arrow_back_white_24dp.svg';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface AppBarProps {
  title: string;
  search: boolean;
  admin: boolean;
  keyword: string;
}

export const AppBar: React.FC<AppBarProps> = ({ title, search, admin, keyword }) => {
  const history = useHistory();

  return (
    <Wrapper aria-label="Application Navigation">
      <Button onClick={() => history.goBack()}>
        <ArrowBack />
      </Button>
      <Title>{title}</Title>
      {search && <SearchBar className="search-main" />}
      <Menu />
    </Wrapper>
  );
}

AppBar.defaultProps = {
  search: true,
  admin: false,
}

const Wrapper = styled.nav`
  width: 100%;
  background: ${p => p.theme.primary};
  display: flex;
  align-items: center;
  position: relative;
`;
