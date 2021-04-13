import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export function Logo() {
  return (
    <Wrapper to="/">
      <Title>The Training Ground</Title>
      <Description>East London</Description>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    h1,
    p {
      color: ${p => p.theme.textHighlight};
    }
  }
`;

const Title = styled.h1`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
  transition: all 0.3s;
`;

const Description = styled.p`
  display: none;

  @media (min-width: 700px) {
    display: block;
    font-size: 0.875rem;
    color: ${p => p.theme.textSecondary};
    font-weight: normal;
    transition: all 0.3s;
  }
`;
