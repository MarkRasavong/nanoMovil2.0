import { CheckoutToken } from '@chec/commerce.js/types/checkout-token'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface Countries {
	[name: string]: string
}

const initialState = {
	checkoutToken: {} as CheckoutToken,
	country: {} as Countries,
	submissions: {
		address: '',
		city: '',
		email: '',
		firstName: '',
		lastName: '',
		shipOption: '',
		subdivision: '',
		postalCode: '',
	},
	activeStep: 0,
}

export const retrieveToken = createAsyncThunk(
	'checkout/retrieveToken',
	async (token: CheckoutToken) => {
		return token
	}
)

export const retrieveShipCountry = createAsyncThunk(
	'checkout/retrieveShipCountry',
	async (countries: Countries) => {
		return countries
	}
)

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		formSubmission: (state, action) => {
			state.submissions = action.payload
		},
		nextStep: (state) => {
			state.activeStep += 1
		},
		backStep: (state) => {
			state.activeStep -= 1
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(retrieveToken.fulfilled, (state, action) => {
				state.checkoutToken = action.payload as CheckoutToken
			})
			.addCase(retrieveShipCountry.fulfilled, (state, action) => {
				state.country = action.payload as Countries
			})
	},
})

export const { formSubmission, nextStep, backStep } = checkoutSlice.actions
export default checkoutSlice.reducer
