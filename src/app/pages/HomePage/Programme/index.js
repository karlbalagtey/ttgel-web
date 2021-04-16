import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProgrammes, selectCourses, selectId } from './slice/selectors';
import { useProgrammeSlice } from './slice';

import styled from 'styled-components/macro';
import { PageBackground, PageWrapper } from 'app/components/PageWrapper';
import { P } from '../components/P';
import { SubTitle } from '../components/SubTitle';
import { Card } from 'app/components/Card';
import { CardList } from 'app/components/CardList';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export function Programme() {
  const defaultProgramme = useSelector(selectId);
  const { actions } = useProgrammeSlice();
  const dispatch = useDispatch();
  const programmes = useSelector(selectProgrammes);
  const courses = useSelector(selectCourses);
  const [selectedYear, setSelectedYear] = React.useState(defaultProgramme);

  const handleYear = React.useCallback(
    event => {
      const id = event.target.id;
      setSelectedYear(id);
      dispatch(actions.changeFeatured(id));
    },
    [dispatch, actions],
  );

  const fetchProgrammes = React.useCallback(() => {
    dispatch(actions.fetchProgrammes());
  }, [dispatch, actions]);

  const fetchFeatured = React.useCallback(() => {
    if (defaultProgramme && defaultProgramme.trim().length > 0) {
      dispatch(actions.fetchFeaturedProgramme());
    }
  }, [dispatch, actions, defaultProgramme]);

  React.useEffect(() => {
    fetchProgrammes();
    fetchFeatured();
  }, [fetchProgrammes, fetchFeatured]);

  return (
    <PageBackground padding={'5rem 0'}>
      <PageWrapper>
        <SubTitle>Outline of the two years</SubTitle>
        <P>
          Over the two year programme we cover six main topics, three in each
          year
        </P>
        <CardList>
          {courses?.length > 0 ? (
            courses.map(course => <Card key={course.id} props={course} />)
          ) : (
            <LoadingIndicator />
          )}
        </CardList>
      </PageWrapper>
    </PageBackground>
  );
}

const YearWrap = styled.div`
  display: flex;
  margin-left: -1rem;
  margin-bottom: 2rem;
`;

const Year = React.memo(styled.button`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  background: ${p => p.theme.background};
  color: ${p => p.theme.primary};
  font-weight: 600;

  &.active {
    background: ${p => p.theme.textHighlight};
    color: ${p => p.theme.background};
  }
`);
