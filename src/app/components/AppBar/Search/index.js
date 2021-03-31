import * as React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../assets/search_white_24dp.svg';
import styled from 'styled-components';

export function SearchBar() {
  const history = useHistory();
  const { url } = useRouteMatch();
  const [keyword, setKeyword] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted', keyword);
    history.push(`${url}/${keyword}`);
  };

  return (
    <SearchBarWrap onSubmit={handleSubmit}>
      <SearchIcon />
      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
    </SearchBarWrap>
  );
}

const SearchBarWrap = styled.form`
  display: flex;
  margin-right: auto;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 0 0.7rem;

  input {
    border: 0;
    padding: 10px;
    background: transparent;
    color: #fff;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #fff;
    }
  }
`;
