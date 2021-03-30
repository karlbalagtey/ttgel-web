import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { AppBar } from 'app/components/AppBar';

import styled from 'styled-components/macro';

export function UserListPage() {
  return (
    <Wrapper>
      <Helmet>
        <title>Dashboard</title>
        <meta
          name="description"
          content="The Training Ground East London - Dashboard"
        />
      </Helmet>
      <NavBar className={'dashboard'} />
      <AppBar title="Users" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
