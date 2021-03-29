import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="The Training Ground East London" />
      </Helmet>
      <NavBar />
      <PageWrapper className="full">
        <Masthead>
          <LoginForm />
        </Masthead>
      </PageWrapper>
    </>
  );
}
