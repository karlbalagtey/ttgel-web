import * as React from 'react';
import { AppBar } from 'app/components/AppBar';
import styled from 'styled-components/macro';

export function CourseManager() {
  return (
    <Wrapper>
      <AppBar title="Course Manager" search={false} admin={true} />
      <h1>Course Manager</h1>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
