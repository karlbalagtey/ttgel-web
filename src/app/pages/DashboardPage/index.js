import * as React from 'react';
import { Switch, Route, Link, Redirect, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { CourseList } from '../CourseListPage/Loadable';
import { CourseDetailPage } from '../CourseDetailPage';
import { CourseManager } from '../CourseManager';
import { UserListPage } from '../UserListPage';
import { selectUser } from '../LoginPage/LoginForm/slice/selectors';

import styled from 'styled-components';
import { BackgroundImage } from 'app/components/BackgroundImage';

export function DashboardPage() {
  const { role } = useSelector(selectUser);
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
              {role === 'admin' && (
                <>
                  <Button to={`${url}/course-management`}>Add Course</Button>
                  <Button to={`${url}/user-management`}>Users</Button>
                </>
              )}
              <Button to={`${url}/timetable`}>Timetable</Button>
            </GroupButton>
          </BackgroundImage>
        </Route>
        <Route exact path={`${path}/courses`} component={CourseList} />
        <Route
          exact
          path={`${path}/courses/search/:keyword`}
          component={CourseList}
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
            role === 'admin' ? <UserListPage /> : <Redirect to="/login" />
          }
        />
        <Route
          exact
          path={`${path}/course-management`}
          render={() =>
            role === 'admin' ? <CourseManager /> : <Redirect to="/login" />
          }
        />
      </Switch>
    </>
  );
}

const Button = styled(Link)`
  display: block;
  background-color: ${p => p.theme.background};
  text-decoration: none;
  margin: 10px;
  padding: 25px;
  font-size: 20px;
  color: ${p => p.theme.text};
  box-shadow: 6px 7px 7px -6px #000;
  transition: all 0.4s;
  text-align: center;

  &:hover {
    background-color: ${p => p.theme.textHighlight};
    color: ${p => p.theme.background};
  }

  @media all and (min-width: 700px) {
    margin: 20px;
  }
`;

const GroupButton = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;
