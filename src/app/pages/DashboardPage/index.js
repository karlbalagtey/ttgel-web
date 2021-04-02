import * as React from 'react';
import { Switch, Route, Link, Redirect, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { CourseListPage } from '../CourseListPage';
import { CourseDetailPage } from '../CourseDetailPage';
import { UserListPage } from '../UserListPage';
import { selectUser } from '../LoginPage/LoginForm/slice/selectors';

import styled from 'styled-components';
import { BackgroundImage } from 'app/components/BackgroundImage';

export function DashboardPage() {
  const user = useSelector(selectUser);
  const { path, url } = useRouteMatch();

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
      <Switch>
        <Route exact path={`${url}`}>
          <BackgroundImage>
            <GroupButton>
              <Button to={`${url}/courses`}>Courses</Button>
              <Button to={`${url}/timetable`}>Timetable</Button>
            </GroupButton>
          </BackgroundImage>
        </Route>
        <Route exact path={`${path}/courses`} component={CourseListPage} />
        <Route
          exact
          path={`${path}/courses/search/:keyword`}
          component={CourseListPage}
        />
        <Route
          exact
          path={`${path}/courses/:slug`}
          component={CourseDetailPage}
        />
        <Route
          exact
          path={`${path}/users`}
          render={() =>
            user.role === 'admin' ? <UserListPage /> : <Redirect to="/login" />
          }
        />
      </Switch>
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
  box-shadow: 6px 7px 7px -6px #000;
`;

const GroupButton = styled.div`
  display: flex;
  justify-content: center;
`;
