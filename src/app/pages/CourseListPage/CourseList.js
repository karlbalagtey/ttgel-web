import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectUser } from 'app/pages/LoginPage/LoginForm/slice/selectors';
import { selectCourses, selectId } from './slice/selectors';
import { useProgrammeSlice } from './slice';

import { Announcement } from './components/Announcement';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { Button } from './components/Button';
import {
  CoursesWrap,
  Course,
  CourseDetails,
  CourseNotes,
} from './components/Course';

export function CourseList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const courses = useSelector(selectCourses);
  const defaultProgramme = useSelector(selectId);
  const { actions } = useProgrammeSlice();

  const fetchCourses = React.useCallback(() => {
    if (defaultProgramme && defaultProgramme.trim().length > 0) {
      dispatch(actions.fetchFeaturedProgramme());
    }
  }, [dispatch, actions, defaultProgramme]);

  const handleClick = course => {
    const URL = `/dashboard/courses/${course.title}`;
    history.push(URL, { id: course.id });
  };

  React.useEffect(() => {
    if (user.role === 'admin') {
      fetchCourses();
    } else {
      history.push('/login');
    }
  }, [user, history, fetchCourses]);

  return (
    <CoursesWrap>
      {courses?.length > 0 ? (
        courses.map(course => (
          <Course key={course.id} props={course}>
            <img src={course.image} alt={course.title} />
            <CourseDetails>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Button onClick={() => handleClick(course)}>Start course</Button>
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
    </CoursesWrap>
  );
}
