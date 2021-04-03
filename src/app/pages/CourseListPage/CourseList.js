import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
import { slugify } from '../../../utils/slugify';

export function CourseList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const defaultProgramme = useSelector(selectId);
  const { actions } = useProgrammeSlice();

  const fetchCourses = React.useCallback(() => {
    if (defaultProgramme && defaultProgramme.trim().length > 0) {
      dispatch(actions.fetchFeaturedProgramme());
    }
  }, [dispatch, actions, defaultProgramme]);

  const handleClick = course => {
    const title = slugify(course.title);
    const URL = `/dashboard/courses/${title}`;
    history.push(URL, { id: course.id });
  };

  React.useEffect(() => {
    fetchCourses();
  }, [history, fetchCourses]);

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
