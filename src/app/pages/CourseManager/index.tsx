import * as React from 'react';
import { AppBar } from 'app/components/AppBar';
import { CourseAddForm } from './CourseAddForm';

import styled from 'styled-components/macro';

export function CourseManager() {
  return (
    <>
      <AppBar title="Course Manager" search={false} admin={true} />
      <Wrapper>
        <CourseAddForm />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: grid;
  height: calc(100vh - 8.5rem);
`;
