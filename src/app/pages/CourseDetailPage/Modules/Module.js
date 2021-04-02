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
  color: ${p => p.theme.text};
  cursor: pointer;
`;
