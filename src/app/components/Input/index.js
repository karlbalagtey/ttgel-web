import * as React from 'react';
import styled from 'styled-components/macro';

export function Input({ handleChange, label, ...props }) {
  return (
    <TextGroup>
      {label && (
        <Label className={props.value.length ? 'shrink' : ''}>{label}</Label>
      )}
      <Text onChange={handleChange} {...props} />
    </TextGroup>
  );
}

const TextGroup = styled.div`
  position: relative;
  margin: 20px 0;
`;

const Text = styled.input`
  color: ${p => p.theme.primary};
  padding: 1rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  color: ${p => p.theme.primary};
`;
