import * as React from 'react';
import { TextGroup, Label, Text } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  handleChange,
  label,
  labelFor,
  ...props
}) => {
  return (
    <TextGroup>
      {label && <Label htmlFor={labelFor}>{label}</Label>}
      <Text onChange={handleChange} {...props} />
    </TextGroup>
  );
}

export default Input;