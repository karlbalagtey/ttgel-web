import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useCourseSlice } from './slice';
import { selectCourse } from './slice/selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { CoursesWrap, Course, CourseDetails } from 'app/components/Course';
import { Image } from 'app/components/Image';

export function Masthead() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { actions } = useCourseSlice();
  const course = useSelector(selectCourse);

  useEffect(() => {
    if (state && state.id) {
      dispatch(actions.fetchCourse(state.id));
    }
  }, [dispatch, actions, state]);

  return (
    <>
      {course ? (
        <CoursesWrap>
          <Course>
            <Image
              src={course.image}
              alt={course.title}
              width={320}
              height={320}
            />
            <CourseDetails>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </CourseDetails>
          </Course>
        </CoursesWrap>
      ) : (
        <LoaderWrap>
          <LoadingIndicator />
        </LoaderWrap>
      )}
    </>
  );
}

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${p => p.theme.backgroundVariant};
  min-height: 400px;
  align-items: center;
`;
