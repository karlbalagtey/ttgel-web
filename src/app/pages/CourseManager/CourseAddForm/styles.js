import styled from 'styled-components/macro';

export const Wrapper = styled.section`
  display: flex;
`;

export const CourseAddFormWrap = styled.section`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: ${p => p.theme.backgroundVariant};
`;

export const ImageUploadWrap = styled.div`
  background-color: ${p => p.theme.backgroundVariant};
`;
