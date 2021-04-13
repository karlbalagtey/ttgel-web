import styled from 'styled-components/macro';

export const Button = props => {
  const handleClick = () => {
    props.onSelect(props.value);
  };

  return (
    <ButtonWrap onClick={handleClick} {...props}>
      {props.children}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.button`
  border: 0;
  cursor: pointer;
  background-color: transparent;
  text-align: left;
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 100%;

  p {
    margin: 0;
    margin-left: 1rem;
    color: ${p => p.theme.text};
  }

  &:hover,
  &:focus {
    outline: 0;
    p {
      color: ${p => p.theme.textHighlight};
    }
    svg {
      transition: all 0.2s;
      fill: ${p => p.theme.textHighlight};
    }
  }

  @media (min-width: 1008px) {
    p {
      display: none;
    }
  }
`;
