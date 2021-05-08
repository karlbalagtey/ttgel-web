import { ButtonWrap } from './styles';

interface ButtonProps {
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonWrap onClick={onClick}>{children}</ButtonWrap>;
};
