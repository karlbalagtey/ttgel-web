import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { AppBar } from 'app/components/AppBar';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

export function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="The Training Ground East London - Dashboard"
        />
      </Helmet>
      <NavBar className={'dashboard'} />
      <AppBar />
      <Wrapper>
        <Window>
          <Title>Dashboard</Title>
        </Window>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
`;

const Window = styled.div`
  grid-area: main;
  padding: 1rem;
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  width: 100%;
  background: ${p => p.theme.backgroundVariant};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${p => p.theme.text};
  margin-top: 0;
`;
