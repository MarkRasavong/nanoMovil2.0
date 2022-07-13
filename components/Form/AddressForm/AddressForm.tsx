import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAppSelector } from '../../../store/hooks'
import { Button } from '../../Button/Button.styled'
import SelectDropdown from '../../SelectDropdown/SelectDropdown'
import TextField from '../../TextField/TextField'
import {FormButtonDiv, FormContainer } from './AddressForm.styled'

const demoOption = [1,2,3,4,5,6,7];

const AddressForm = () => {
  const checkout = useAppSelector((state) => state.checkout)
  const methods = useForm();
  const textFieldDetails = [
    {name: 'firstName', label: 'Nombre'}, {name: 'lastName', label: 'Apellido(s)'}, {name: 'address', label: 'Dirección'},
    {name: 'email', label: 'Correo Electrónico'}, {name: 'city', label: 'Ciudad'}, {name: 'zip', label: 'Código Postal'}
];

  return (
    <>
    <h3>Dirección de envío</h3>
    <FormProvider {...methods}>
      <FormContainer>
          {
            textFieldDetails.map(({name, label}) => (
              <TextField type="text" name={name} label={label} key={`textField${label}`}/>
            ))
          }
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
        <FormButtonDiv>
          <Button>Volver al carrito</Button>
          <Button>Siguiente</Button>
        </FormButtonDiv>
      </FormContainer>
    </FormProvider>
    </>
  )
}

export default AddressForm