import styled from 'styled-components/macro';

export const SubTitle = styled.h2`
  text-transform: uppercase;
  margin: 0;
  color: ${p => p.theme.text};

  @media all and (min-width: 700px) {
    font-size: 2rem;
  }
`;
