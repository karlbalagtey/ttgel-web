import styled from 'styled-components/macro';

export function Button({ handleClick, children, ...props }) {
  return (
    <ButtonWrap onClick={handleClick} {...props}>
      {children}
    </ButtonWrap>
  );
}

const ButtonWrap = styled.button`
  padding: 1rem;
  color: ${p => p.theme.primary};
  border: 0;
  cursor: pointer;
  transition: all 0.3s;

  &.primary {
    background-color: ${p => p.theme.primary};
    color: ${p => p.theme.background};

    &:hover {
      background-color: ${p => p.theme.textHighlight};
      color: ${p => p.theme.background};
    }
  }

  &:hover {
    color: ${p => p.theme.textHighlight};
  }

  &.w-100 {
    width: 100%;
  }

  &:disabled {
    cursor: not-allowed;

    :hover {
      color: ${p => p.theme.primary};
    }
  }
`;
