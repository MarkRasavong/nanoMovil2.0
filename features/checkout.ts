import { CheckoutToken } from '@chec/commerce.js/types/checkout-token'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface Countries {
	[name: string]: string
}

const initialState = {
	checkoutToken: {} as CheckoutToken,
	user_submission: {
		address: '',
		city: '',
		email: '',
		firstName: '',
		lastName: '',
		shipOption: '',
		subdivision: '',
		zip: '',
		country: '',
	},
	activeStep: 0,
}

export const retrieveToken = createAsyncThunk(
	'checkout/retrieveToken',
	async (token: CheckoutToken) => {
		return token
	}
)

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState,
	reducers: {
		formSubmission: (state, action) => {
			state.user_submission = action.payload
		},
		nextStep: (state) => {
			state.activeStep += 1
		},
		backStep: (state) => {
			state.activeStep -= 1
		},
	},
	extraReducers: (builder) => {
		builder.addCase(retrieveToken.fulfilled, (state, action) => {
			state.checkoutToken = action.payload as CheckoutToken
		})
	},
})

export const { formSubmission, nextStep, backStep } = checkoutSlice.actions
export default checkoutSlice.reducer
