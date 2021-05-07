import styled from 'styled-components/macro';

export const TextGroup = styled.div`
  position: relative;
  margin: 20px 0;
`;

export const Text = styled.input`
  color: ${p => p.theme.primary};
  background: ${p => p.theme.background};
  padding: 1rem;
  display: block;
  width: 100%;
  border: 1px solid ${p => p.theme.borderLight};
  border-radius: 0;

  &:focus {
    outline: none;
  }

  &[type='file'] {
    border: 1px solid ${p => p.theme.borderLight};
    background: ${p => p.theme.background};

    &:hover {
      background: ${p => p.theme.textHighlight};
      cursor: pointer;
    }
  }

  /* &[type='file']::-webkit-file-upload-button {
    visibility: hidden;
  } */
`;

export const Label = styled.label`
  color: ${p => p.theme.primary};
`;
