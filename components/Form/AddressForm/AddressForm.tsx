import React from 'react'
import { Button } from '../../Button/Button.styled'
import SelectDropdown from '../../SelectDropdown/SelectDropdown'
import TextField from '../../TextField/TextField'
import {FormButtonDiv, FormContainer } from './AddressForm.styled'

const demoOption = [1,2,3,4,5,6,7]

const AddressForm = () => {
  return (
    <>
    <h3>Dirección de envío</h3>
      <FormContainer>
        <TextField type='text'/>
        <TextField type='text'/>
        <TextField type='text'/>
        <TextField type='text'/>
        <TextField type='text'/>
        <TextField type='text'/>
        <SelectDropdown>
          {demoOption.map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </SelectDropdown> {/* SelectDropdown */}
        <SelectDropdown>
          {demoOption.map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </SelectDropdown> {/* SelectDropdown */}
        <SelectDropdown>
          {demoOption.map((item) => (
            <option value={item} key={item}>{item}</option>
          ))}
        </SelectDropdown> {/* SelectDropdown */}
      </FormContainer>
      <FormButtonDiv>
        <Button>Volver al carrito</Button>
        <Button>Siguiente</Button>
      </FormButtonDiv>
    </>
  )
}

export default AddressForm