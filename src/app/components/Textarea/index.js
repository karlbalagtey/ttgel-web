import React from 'react';
import styled from 'styled-components/macro';

export function Textarea({ handleTextarea, value, ...props }) {
  return <TextArea onChange={handleTextarea} {...props} value={value} />;
}

const TextArea = styled.textarea`
  border: 1px solid ${p => p.theme.borderLight};
  background: ${p => p.theme.background};
  padding: 1rem;
  color: ${p => p.theme.primary};

  &:focus {
    outline: none;
  }
`;
