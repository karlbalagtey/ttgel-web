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
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;
