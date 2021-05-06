import styled from 'styled-components/macro';

export const Button = styled.button`
  padding: 1rem;
  color: ${p => p.theme.primary};
  border: 0;
  text-decoration: none;
  text-align: left;
  width: fit-content;
  box-shadow: 0px 0px 2px 0px;
  transition: all 0.3s;

  &.primary {
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.background};

    &:hover {
      background-color: ${p => p.theme.textHighlight};
      color: ${p => p.theme.background};
      cursor: pointer;
    }
  }

  &:hover {
    color: ${p => p.theme.textHighlight};
    cursor: pointer;
  }
`;
