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
  padding: 1rem;

  &:hover,
  &:focus {
    outline: 0;

    svg {
      transition: all 0.2s;
      fill: ${p => p.theme.textHighlight};
    }
  }
`;
