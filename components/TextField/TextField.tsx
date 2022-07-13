import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { InputContainer, InputLabel, PlaceholderSpan, TextInput } from './TextField.styled'

interface TxtFieldProps {
  type: string;
  label: string;
  name: string;
}

const TextField = ({type, label, name}: TxtFieldProps) => {
  const { control } = useFormContext();

  return (
    <InputContainer>
    <Controller
      name={name}
      control={control}
      render={
        ({ field }) => (
          <React.Fragment>
            <TextInput type={type} required {...field}/>
            <InputLabel htmlFor={name}>
              <PlaceholderSpan>{label}</PlaceholderSpan>
            </InputLabel>
          </React.Fragment>
        )
      }
      />
    </InputContainer>
    
  )
}

export default TextField