import * as React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useCourseSlice } from './slice';
import { selectCourse } from './slice/selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export function Masthead() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { actions } = useCourseSlice();
  const course = useSelector(selectCourse);

  React.useEffect(() => {
    dispatch(actions.fetchCourse(state.id));
  }, [dispatch, actions, state]);

  return (
    <>
      {course ? (
        <Wrapper>
          <CourseImage src={course.image} alt={course.title} />
          <CourseInfo>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </CourseInfo>
        </Wrapper>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  padding: 1.5rem;
  background-color: ${p => p.theme.backgroundVariant};
`;

const CourseImage = styled.img`
  max-width: 100%;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  h3 {
    margin: 0;
  }

  h3,
  p {
    color: ${p => p.theme.text};
  }
`;
