import React from 'react'
import { InputContainer, InputLabel, PlaceholderSpan, TextInput } from './TextField.styled'

const TextField = () => {
  return (
    <InputContainer>
      <TextInput type="text" name='name' required autoComplete='off'/>
      <InputLabel htmlFor="name">
        <PlaceholderSpan>Name</PlaceholderSpan>
      </InputLabel>
    </InputContainer>
    
  )
}

export default TextField