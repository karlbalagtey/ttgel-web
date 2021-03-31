import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppBar } from 'app/components/AppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  selectAuth,
  selectUser,
} from 'app/pages/LoginPage/LoginForm/slice/selectors';
import { selectCourses, selectId } from './slice/selectors';
import { useProgrammeSlice } from './slice';

import { LoadingIndicator } from 'app/components/LoadingIndicator';
import {
  CourseList,
  Course,
  CourseDetails,
  CourseNotes,
} from './components/Course';
import { Button } from './components/Button';

import styled from 'styled-components/macro';

export function CourseListPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const courses = useSelector(selectCourses);
  const defaultProgramme = useSelector(selectId);
  const { actions } = useProgrammeSlice();
  const data = useParams();

  const fetchCourses = React.useCallback(() => {
    if (defaultProgramme && defaultProgramme.trim().length > 0) {
      dispatch(actions.fetchFeaturedProgramme());
    }
  }, [dispatch, actions, defaultProgramme]);

  const handleClick = course => {
    console.log(course);
    const URL = `/dashboard/courses/${course.title}`;
    history.push(URL, { id: course.id });
  };

  React.useEffect(() => {
    console.log(data);
    if (user.role === 'admin') {
      fetchCourses();
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
      <AppBar title="Courses" />
      <Wrapper>
        <CourseList>
          {courses?.length > 0 ? (
            courses.map(course => (
              <Course key={course.id} props={course}>
                <img src={course.image} alt={course.title} />
                <CourseDetails>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <Button onClick={() => handleClick(course)}>
                    Start course
                  </Button>
                </CourseDetails>
                <CourseNotes>
                  <Announcement>
                    <strong>Announcement:</strong>
                    <p>{course.notes}</p>
                  </Announcement>
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

const Announcement = styled.div`
  display: flex;

  strong,
  p {
    font-size: 0.8rem;
    margin: 0;
  }

  p {
    padding: 0 0.5rem;
  }
`;
