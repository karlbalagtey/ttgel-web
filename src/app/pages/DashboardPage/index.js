import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { AppBar } from 'app/components/AppBar';
import styled from 'styled-components';
import { BackgroundImage } from 'app/components/BackgroundImage';

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
      <AppBar title="Dashboard" />
      <BackgroundImage>
        <GroupButton>
          <Button to="/courses">Courses</Button>
          <Button to="/timetable">Timetable</Button>
        </GroupButton>
      </BackgroundImage>
    </>
  );
}

const Button = styled(Link)`
  display: flex;
  background-color: ${p => p.theme.background};
  text-decoration: none;
  padding: 2rem;
  margin: 1.5rem;
  font-size: 1.4rem;
  color: ${p => p.theme.text};
`;

const GroupButton = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${p => p.theme.text};
  margin-top: 0;
`;
