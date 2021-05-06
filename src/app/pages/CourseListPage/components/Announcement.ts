import styled from 'styled-components/macro';

export const Announcement = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;

    p {
      padding: 0 0.5rem;
    }
  }

  strong,
  p {
    font-size: 0.8rem;
    margin: 0;
  }
`;
