import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProgrammes } from './slice/selectors';
import { useProgrammeSlice } from './slice';

import styled from 'styled-components/macro';
import { PageBackground, PageWrapper } from 'app/components/PageWrapper';
import { P } from '../components/P';
import { SubTitle } from '../components/SubTitle';
import { Card } from 'app/components/Card';

export function Programme() {
  const { actions } = useProgrammeSlice();
  const dispatch = useDispatch();
  const programmes = useSelector(selectProgrammes);

  React.useEffect(() => {
    dispatch(actions.fetchProgrammes());
  }, [dispatch, actions]);

  return (
    <PageBackground padding={'5rem 0'}>
      <PageWrapper>
        <SubTitle>Outline of the two years</SubTitle>
        <P>
          Over the two year programme we cover six main topics, three in each
          year
        </P>
        <YearWrap>
          {programmes.map(p => (
            <Year>{p.title}</Year>
          ))}
        </YearWrap>
        <List>
          {/* {courses.map(course => (
            <Card key={course.id} props={course} />
          ))} */}
        </List>
      </PageWrapper>
    </PageBackground>
  );
}

const YearWrap = styled.div`
  display: flex;
  margin-left: -1rem;
`;

const Year = styled.button`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  background: ${p => p.theme.background};
  color: ${p => p.theme.primary};
  font-weight: 600;
`;

const List = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  @media (min-width: ${p => p.theme.media.sm}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${p => p.theme.media.md}px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
  }
`;
