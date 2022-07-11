import React from 'react'
import { Radio } from './RadioBtn.styled';

export interface RadioBtnProps {
  catName: string;
  value: string;
  label: string;
  checked: boolean;
  onClick: () => void
}

const RadioBtn = ({label, catName, value, onClick, checked}: RadioBtnProps) => {
  return (
    <div onClick={onClick}>
      <Radio type="radio" name={catName} value={value} checked={checked} onChange={onClick}/>
      <label htmlFor={value} style={{ cursor: 'pointer' }}>{label}</label>
    </div>
  )
}

export default RadioBtn