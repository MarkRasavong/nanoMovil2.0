import { GetShippingOptionsResponse } from '@chec/commerce.js/features/checkout'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { commerce } from '../../../lib/commerce'
import { useAppSelector } from '../../../store/hooks'
import { Button } from '../../Button/Button.styled'
import SelectDropdown from '../../SelectDropdown/SelectDropdown'
import TextField from '../../TextField/TextField'
import {FormButtonDiv, FormContainer } from './AddressForm.styled'

const AddressForm = () => {
  const {id: tokenId} = useAppSelector((state) => state.checkout.checkoutToken)
  const checkout = useAppSelector((state) => state.checkout)
  const [subdivisions, setSubdvisions] = useState({});
  const [shippingOptions, setShippingOptions] = useState<GetShippingOptionsResponse[]>([]);
  const methods = useForm();
  const [country, setCountry] = useState('ES');
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOpt, setShippingOpt] = useState('');

  const textFieldDetails = [
    {name: 'firstName', label: 'Nombre'}, {name: 'lastName', label: 'Apellido(s)'}, {name: 'address', label: 'Dirección'},
    {name: 'email', label: 'Correo Electrónico'}, {name: 'city', label: 'Ciudad'}, {name: 'zip', label: 'Código Postal'}
];

const fetchSubdivisions = async (countryCode: string, checkoutTokenId: string) => {
  const {subdivisions} = await commerce.services.localeListShippingSubdivisions(checkoutTokenId, countryCode);
  setSubdvisions(subdivisions);
  setShippingSubdivision(subdivisions[0]);
};

const fetchShippingOptions = async (checkoutTokenId: string, stateProvince: string) => {
  const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country: 'ES', region: stateProvince });
  setShippingOptions(options)
  setShippingOpt(shippingOptions[0]?.id)
};

useEffect(() => {
  if (country) fetchSubdivisions('ES', tokenId);
}, [country, tokenId]);

useEffect(() => {
  if(shippingSubdivision) fetchShippingOptions(tokenId, shippingSubdivision)
}, [tokenId, shippingSubdivision])
  
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
          <SelectDropdown name='País' value={country} onChange={e => setCountry(e.target.value)}>
            {
              Object.keys(checkout.country).map((code) => <option value={code} key={`selectCountryCode_${code}`}>España</option>)
            }
          </SelectDropdown>
          <SelectDropdown name='Provincia' value={shippingSubdivision} onChange={e => setShippingSubdivision(e.target.value)}>
          º{
              Object.entries(subdivisions).map(([code, name]) => <option value={code} key={`selectSubdivision_${code}`}>
                {name as string}
                </option>)
            }
          </SelectDropdown>
          <SelectDropdown name='Envío' value={shippingOpt} onChange={e => setShippingOpt(e.target.value)}>
            {
              shippingOptions.map(sO => (
                <option value={sO.id} key={`selectSO_${sO.id}`}>
                  {`${sO.description} - (${sO.price.formatted_with_symbol})`}
                </option>
              ))
            }
          </SelectDropdown>
        <FormButtonDiv>
          <Link passHref href='/cesta'>
            <Button>Volver al carrito</Button>
          </Link>
          <Button>Siguiente</Button>
        </FormButtonDiv>
      </FormContainer>
    </FormProvider>
    </>
  )
}

export default AddressForm