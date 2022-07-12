import React from 'react'
import { InputContainer, InputLabel, PlaceholderSpan, TextInput } from './TextField.styled'

interface TxtFieldProps {
  type: string;
}

const TextField = ({type}: TxtFieldProps) => {
  return (
    <InputContainer>
      <TextInput type={type} name='name' required autoComplete='off'/>
      <InputLabel htmlFor="name">
        <PlaceholderSpan>Name</PlaceholderSpan>
      </InputLabel>
    </InputContainer>
    
  )
}

export default TextField