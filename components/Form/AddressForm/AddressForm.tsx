import { GetShippingOptionsResponse } from '@chec/commerce.js/features/checkout'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { formSubmission, nextStep } from '../../../features/checkout'
import { commerce } from '../../../lib/commerce'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { Button } from '../../Button/Button.styled'
import SelectDropdown from '../../SelectDropdown/SelectDropdown'
import TextField from '../../TextField/TextField'
import {FormButtonDiv, FormContainer } from './AddressForm.styled'

const AddressForm = () => {
  const dispatch = useAppDispatch();
  const methods = useForm();
  const tokenId = useAppSelector((state) => state.checkout.checkoutToken.id)
  const [subdivisions, setSubdvisions] = useState({});
  const [shippingOptions, setShippingOptions] = useState<GetShippingOptionsResponse[]>([]);
  const [shipData, setShipData] = useState({
    country: '',
    subdivision: '',
    shipOption: ''
  })

  
  const textFieldDetails = [
    {name: 'firstName', label: 'Nombre'}, {name: 'lastName', label: 'Apellido(s)'}, {name: 'address', label: 'Dirección'},
    {name: 'email', label: 'Correo Electrónico'}, {name: 'city', label: 'Ciudad'}, {name: 'zip', label: 'Código Postal'}
];

const fetchSubdivisions = async (countryCode: string, checkoutTokenId: string) => {
  const {subdivisions} = await commerce.services.localeListShippingSubdivisions(checkoutTokenId, countryCode);
  setSubdvisions(subdivisions);
};

const fetchShippingOptions = async (checkoutTokenId: string, stateProvince: string) => {
  const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country: 'ES', region: stateProvince });
  setShippingOptions(options);
};

useEffect(() => {
  if (shipData.country) fetchSubdivisions('ES', tokenId);
}, [shipData.country, tokenId]);

useEffect(() => {
  if(shipData.subdivision) fetchShippingOptions(tokenId, shipData.subdivision)
}, [tokenId, shipData.subdivision]);

const handleFormSubmit = (data: FieldValues) => {
  dispatch(formSubmission({...data, ...shipData}));
  dispatch(nextStep());
};

  return (
    <>
    <h3>Dirección de envío</h3>
    <FormProvider {...methods}>
      <FormContainer onSubmit={methods.handleSubmit((data) => handleFormSubmit(data))}>
            {
              textFieldDetails.map(({name, label}) => (
                <TextField type="text" name={name} label={label} key={`textField${label}`}/>
              ))
            }
          <SelectDropdown name='País' value={shipData.country} onChange={e => setShipData({...shipData, country:e.target.value})}>
            <option value="ES" key='selectCountryCode_ES'>España</option>
            <option value='' key={`selectCountryCode_null`} disabled>Seleciona País</option>
          </SelectDropdown>
          <SelectDropdown name='Provincia' value={shipData.subdivision} onChange={e => setShipData({...shipData, subdivision:e.target.value})}>
            {
              Object.entries(subdivisions).map(([code, name]) => <option value={code} key={`selectSubdivision_${code}`}>
                {name as string}
                </option>)
            }
            <option value='' key={`selectProvincia_null`} disabled>Seleciona Provincia</option>

          </SelectDropdown>
          <SelectDropdown name='Envío' value={shipData.shipOption} onChange={e => setShipData({...shipData, shipOption:e.target.value})}>
            {
              shippingOptions.map(sO => (
                <option value={sO.id} key={`selectSO_${sO.id}`}>
                  {`${sO.description} - (${sO.price.formatted_with_symbol})`}
                </option>
              ))
            }
            <option value='' key={`selectShipping_null`} disabled>Seleciona Envío</option>
          </SelectDropdown>
        <FormButtonDiv className='formBtnBlock'>
          <Link passHref href='/cesta'>
            <Button>Volver al carrito</Button>
          </Link>
          <Button type="submit">Siguiente</Button>
        </FormButtonDiv>
      </FormContainer>
    </FormProvider>
    </>
  )
}

export default AddressForm;