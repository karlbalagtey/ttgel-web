import { PageBackground, PageWrapper } from 'app/components/PageWrapper';
import { SubTitle } from '../components/SubTitle';
import { P } from '../components/P';
import styled from 'styled-components/macro';

export function CourseDetails() {
  return (
    <PageBackground className="secondary" height={'100vh'}>
      <PageWrapper>
        <Container>
          <Wrapper>
            <SubTitle>Course Details</SubTitle>
            <P>
              With God’s help we plan to repeat the course again over the next
              two years, beginning in on February 8th 2020 and finishing in
              January 2022.
            </P>
            <P>
              There will be 18 sessions per year on alternate Saturday mornings
              during term time, from 8.30 am to 11.00 am. The course takes place
              at St John's Church Walthamstow.
            </P>
          </Wrapper>
          <Wrapper>
            <SubTitle>Course Fees</SubTitle>
            <P>
              The course costs £240 per person for the full two years. This
              includes not only the teaching but also textbooks, course notes
              for each session, tea, coffee and biscuits. Recordings and notes
              can be accessed on our website.
            </P>
            <P>
              Costs can be paid in annual or termly instalments. If you want to
              participate but have a problem with the cost, please let us know.
            </P>
          </Wrapper>
        </Container>
      </PageWrapper>
    </PageBackground>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1.5rem;

  @media (min-width: ${p => p.theme.media.sm}px) {
    width: 50%;
  }
`;

const Container = styled.section`
  display: flex;
  margin: 0 -1.5rem;
  flex-direction: column;

  @media (min-width: ${p => p.theme.media.sm}px) {
    flex-direction: row;
  }
`;
