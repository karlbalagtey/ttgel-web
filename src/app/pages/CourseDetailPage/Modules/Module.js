import styled from 'styled-components/macro';

export const ModulesWrap = styled.section`
  display: flex;
  padding: 1.5rem;
`;

export const ModuleItem = styled.div`
  display: flex;
`;

export const Module = styled.button`
  text-decoration: none;
  margin: 10px;
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.background};
  cursor: pointer;
  border: 1px solid ${p => p.theme.text};
  box-shadow: 2px 3px 7px -2px #000;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 1rem;
  transition: all 0.4s;

  &:hover,
  &.selected {
    color: ${p => p.theme.textHighlight};
    border: 1px solid ${p => p.theme.textHighlight};
  }
`;
