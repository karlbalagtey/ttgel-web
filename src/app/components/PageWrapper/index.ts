import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export const PageWrapper = styled.section`
  width: ${StyleConstants.WIDTH};
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: content-box;

  &.full {
    width: 100%;
    padding: 0;
  }
`;

interface PageBackgroundProps {
  height: number;
  padding: number;
}

export const PageBackground = styled.section<PageBackgroundProps>`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.background};
  min-height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || '0'};

  &.secondary {
    background-color: ${p => p.theme.backgroundVariant};
  }
`;
