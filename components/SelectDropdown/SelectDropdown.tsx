import React from 'react'
import { PlaceholderSpan, SelectContainer, SelectInput, SelectLabel } from './Select.styled'

interface SelectProps {
  children: React.ReactNode;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectDropdown = ({children, name, value, onChange}: SelectProps) => {
  return (
    <SelectContainer>
      <SelectInput name={name} value={value} onChange={onChange} required>
        {children}
      </SelectInput>
      <SelectLabel htmlFor={name}>
        <PlaceholderSpan>{name}</PlaceholderSpan>
      </SelectLabel>
    </SelectContainer>
    )
}

export default SelectDropdown