import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppBar } from 'app/components/AppBar';
import styled from 'styled-components/macro';
import { CourseList } from './CourseList';

export function CourseListPage() {
  return (
    <>
      <Helmet>
        <title>Courses</title>
        <meta
          name="description"
          content="The Training Ground East London - Dashboard"
        />
      </Helmet>
      <AppBar title="Courses" />
      <Wrapper>
        <CourseList />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;
