import styled from 'styled-components/macro';

export const CoursesWrap = styled.div`
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
  flex-direction: column;
  margin-bottom: 1.5rem;
  background-color: ${p => p.theme.backgroundVariant};

  @media (min-width: 800px) {
    flex-direction: row;
  }

  img {
    max-height: 200px;
    object-fit: cover;
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

  font-size: 0.7rem;

  @media (min-width: 800px) {
    width: 30%;
    border-left: 2px solid ${p => p.theme.background};
  }
`;
