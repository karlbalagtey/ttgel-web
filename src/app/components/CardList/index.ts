import styled from 'styled-components/macro';

export const CardList = styled.section`
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
