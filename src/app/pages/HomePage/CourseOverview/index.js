import * as React from 'react';
import { SubTitle } from '../components/SubTitle';
import { P } from '../components/P';

import { PageBackground, PageWrapper } from 'app/components/PageWrapper';

export function CourseOverview() {
  return (
    <PageBackground height={'100vh'}>
      <PageWrapper>
        <SubTitle>What is the training ground?</SubTitle>
        <P>
          The Training Ground is a course designed by a group of evangelical
          churches in East London to help Christians of every sort both to grasp
          God’s word and to share it more clearly – whether at home, at work, at
          church or wherever you are
        </P>
        <P>
          The first Training Ground programme began in September 2015, The third
          run through of the programme will begin on February 8th 2020 and run
          till January 2022.
        </P>
      </PageWrapper>
    </PageBackground>
  );
}
