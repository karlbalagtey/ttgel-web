import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PageBackground, PageWrapper } from 'app/components/PageWrapper';
import { P } from '../components/P';

import styled from 'styled-components/macro';
import { SubTitle } from '../components/SubTitle';
import { Card } from 'app/components/Card';

export function Programme() {
  const courses = [
    {
      id: 1,
      title: 'Course 1',
      description: 'Description 1',
      src: 'https://picsum.photos/320?random=1',
      alt: 'Alt text 1',
    },
    {
      id: 2,
      title: 'Course 2',
      description: 'Description 2',
      src: 'https://picsum.photos/320?random=2',
      alt: 'Alt text 2',
    },
    {
      id: 3,
      title: 'Course 3',
      description: 'Description 3',
      src: 'https://picsum.photos/320?random=3',
      alt: 'Alt text 3',
    },
    {
      id: 4,
      title: 'Course 4',
      description: 'Description 4',
      src: 'https://picsum.photos/320?random=4',
      alt: 'Alt text 4',
    },
  ];
  return (
    <PageBackground padding={'5rem 0'}>
      <PageWrapper>
        <SubTitle>Outline of the two years</SubTitle>
        <P>
          Over the two year programme we cover six main topics, three in each
          year
        </P>
        <List>
          {courses.map(course => (
            <Card key={course.id} props={course} />
          ))}
        </List>
      </PageWrapper>
    </PageBackground>
  );
}

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
