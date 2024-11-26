import React, { ChangeEvent, TextareaHTMLAttributes } from 'react';

import { StyledFieldWrapper } from '../FieldWrapper';
import { StyledTextArea } from './styled';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  onChangeHandler: (value: string) => void;
}

export const TextArea = (props: TextAreaProps) => {
  const { label, id, onChangeHandler, ...rest } = props;

  const inputChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    onChangeHandler(event.target.value);
  };

  return (
    <StyledFieldWrapper>
      <label htmlFor={id}>{label}</label>
      <StyledTextArea id={id} {...rest} onChange={inputChangeHandler} />
    </StyledFieldWrapper>
  );
};
