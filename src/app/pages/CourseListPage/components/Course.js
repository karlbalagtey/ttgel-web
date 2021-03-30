import { Button } from 'app/components/Button';
import styled from 'styled-components/macro';

export const CourseList = styled.div`
  display: flex;
  flex-direction: column;

  h2,
  p {
    color: ${p => p.theme.text};
  }
`;

export const Course = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  background-color: ${p => p.theme.backgroundVariant};

  img {
    max-height: 200px;
  }
`;

export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 70%;

  h2 {
    margin: 0;
  }

  p {
    max-width: 70%;
  }
`;

export const CourseButton = styled(Button)`
  text-align: left;
  width: fit-content;
  box-shadow: 0px 0px 2px 0px;
`;

export const CourseNotes = styled.div`
  display: flex;
  padding: 1.5rem;
  width: 30%;
  font-size: 0.7rem;
  border-left: 2px solid ${p => p.theme.background};

  h2 {
    margin-top: 0;
  }
`;
