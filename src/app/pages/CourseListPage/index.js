import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { AppBar } from 'app/components/AppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  selectAuth,
  selectUser,
} from 'app/pages/LoginPage/LoginForm/slice/selectors';

import { selectProgrammes, selectCourses, selectId } from './slice/selectors';
import { useProgrammeSlice } from './slice';

import { PageWrapper } from 'app/components/PageWrapper';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import {
  CourseList,
  Course,
  CourseDetails,
  CourseButton,
  CourseNotes,
} from './components/Course';

import styled from 'styled-components/macro';

export function CourseListPage() {
  const history = useHistory;
  // const courses = useSelector(selectCourses);
  const auth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const defaultProgramme = useSelector(selectId);
  const { actions } = useProgrammeSlice();
  const dispatch = useDispatch();
  const programmes = useSelector(selectProgrammes);
  const courses = useSelector(selectCourses);
  const [selectedYear, setSelectedYear] = React.useState(defaultProgramme);

  const fetchCourses = React.useCallback(() => {
    if (defaultProgramme && defaultProgramme.trim().length > 0) {
      dispatch(actions.fetchFeaturedProgramme());
    }
  }, [dispatch, actions, defaultProgramme]);

  React.useEffect(() => {
    if (auth) {
      fetchCourses();
      console.log(auth);
      console.log(user);
    } else {
      history.push('/login');
    }
  }, [auth, user, history, fetchCourses]);

  return (
    <>
      <Helmet>
        <title>Courses</title>
        <meta
          name="description"
          content="The Training Ground East London - Dashboard"
        />
      </Helmet>
      <NavBar className={'dashboard'} />
      <AppBar title="Courses" className="secondary" />
      <Wrapper>
        <CourseList>
          {courses?.length > 0 ? (
            courses.map(course => (
              <Course key={course.id} props={course}>
                <img src={course.image} alt={course.title} />
                <CourseDetails>
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                  <CourseButton>Start course</CourseButton>
                </CourseDetails>
                <CourseNotes>
                  <h2>Notes:</h2>
                  <p>{course.notes}</p>
                </CourseNotes>
              </Course>
            ))
          ) : (
            <LoadingIndicator />
          )}
        </CourseList>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;
