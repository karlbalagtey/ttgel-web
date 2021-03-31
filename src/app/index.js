import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { selectAuth } from 'app/pages/LoginPage/LoginForm/slice/selectors';

import { GlobalStyle } from '../styles/global-styles';
import { SnackBar } from './components/SnackBar';

import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { useLoginSlice } from './pages/LoginPage/LoginForm/slice';

export function App() {
  const dispatch = useDispatch();
  const { actions } = useLoginSlice();
  const auth = useSelector(selectAuth);

  React.useEffect(() => {
    dispatch(actions.watchAuth());
  }, [dispatch, actions]);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - The Training Ground East London"
        defaultTitle="The Training Ground East London"
      >
        <meta name="description" content="The Training Ground East London" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route
          path="/dashboard"
          render={() => (auth ? <DashboardPage /> : <Redirect to="/login" />)}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <SnackBar />
    </BrowserRouter>
  );
}
