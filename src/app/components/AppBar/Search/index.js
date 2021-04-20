import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../assets/search_white_24dp.svg';
import styled from 'styled-components';

export function SearchBar({ className }) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const [keyword, setKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted', keyword);
    history.push(`${url}/search?=${keyword}`);
  };

  return (
    <SearchBarWrap className={className} onSubmit={handleSubmit}>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
    </SearchBarWrap>
  );
}

const SearchBarWrap = styled.form`
  width: 100%;
  &.search-main {
    display: none;

    @media (min-width: 815px) {
      display: flex;
      margin-right: auto;
      align-items: center;
      padding: 0 0.7rem;
      width: auto;
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  &.search-mobile {
    display: flex;
    padding: 1.5rem;
    align-items: center;

    input {
      width: 100%;
    }

    @media (min-width: 815px) {
      display: none;
    }
  }
`;

const SearchInput = styled.input`
  display: flex;
  border: 0;
  padding: 10px;
  background: transparent;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;
