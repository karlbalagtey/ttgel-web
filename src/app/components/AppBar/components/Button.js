import styled from 'styled-components/macro';

export const Button = styled.button`
  padding: 1rem;
  background: transparent;
  border: 0;
  border-right: 1px dashed lightgray;
  cursor: pointer;

  svg {
    transition: all 0.4s;
  }

  &:hover {
    svg {
      fill: ${p => p.theme.textHighlight};
    }
  }
`;
