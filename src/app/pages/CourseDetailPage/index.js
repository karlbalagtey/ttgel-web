import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppBar } from 'app/components/AppBar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCourse } from './slice/selectors';
import { ReactComponent as ArrowBack } from 'app/components/assets/arrow_back_white_24dp.svg';
import styled from 'styled-components/macro';

import { Modules } from './Modules';
import { Masthead } from './Masthead';

export function CourseDetailPage() {
  const history = useHistory();
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
        <Button onClick={() => history.goBack()}>
          <ArrowBack />
        </Button>
        <AppBar title={course ? course.title : 'Loading...'} />
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

const Button = styled.button`
  padding: 1rem;
  background: transparent;
  border: 0;
  border-right: 1px dashed lightgray;
  cursor: pointer;

  svg {
    transition: all 0.4s;
  }

  &:hover {
    svg {
      fill: ${p => p.theme.textHighlight};
    }
  }
`;
