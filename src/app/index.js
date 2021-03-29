import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <SnackBar />
    </BrowserRouter>
  );
}
