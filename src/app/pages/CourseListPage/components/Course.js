import styled from 'styled-components/macro';

export const CourseList = styled.div`
  display: flex;
  flex-direction: column;

  h3,
  p,
  strong {
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

  h3 {
    margin: 0;
    font-size: 1.3rem;
  }

  p {
    max-width: 70%;
  }
`;

export const CourseNotes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 30%;
  font-size: 0.7rem;
  border-left: 2px solid ${p => p.theme.background};
`;
