import React from 'react'
import { PlaceholderSpan, SelectContainer, SelectInput, SelectLabel } from './Select.styled'

interface SelectProps {
  children: React.ReactNode
}

const SelectDropdown = ({children}: SelectProps) => {
  return (
    <SelectContainer>
      <SelectInput name='name' required>
        {children}
      </SelectInput>
      <SelectLabel htmlFor="name">
        <PlaceholderSpan>Name</PlaceholderSpan>
      </SelectLabel>
    </SelectContainer>
    )
}

export default SelectDropdown