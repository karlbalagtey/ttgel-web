import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppBar } from 'app/components/AppBar';
import { useSelector } from 'react-redux';

import { selectCourse } from './slice/selectors';
import styled from 'styled-components/macro';

import { Modules } from './Modules';
import { Masthead } from './Masthead';

export function CourseDetailPage() {
  const course = useSelector(selectCourse);

  return (
    <>
      <Helmet>
        <title>Courses</title>
        <meta
          name="description"
          content="The Training Ground East London - Dashboard"
        />
      </Helmet>
      <Wrap>
        <AppBar
          title={course ? course.title : 'Loading...'}
          search={course && true}
        />
      </Wrap>
      <Modules />
      <Masthead />
    </>
  );
}
const Wrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.primary};
`;
