export type Handler = () => void;

export interface InjectedProps {
  handleChange?: Handler;
}

export interface InputProps extends InjectedProps {
  label: string;
  labelFor: string;
}