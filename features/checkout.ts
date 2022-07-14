import { CheckoutCaptureResponse } from '@chec/commerce.js/types/checkout-capture-response'
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
	capturedOrder: {},
	order: {} as CheckoutCaptureResponse,
	orderError: false,
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
		setOrder: (state, action) => {
			state.order = action.payload
		},
		setError: (state, action) => {
			state.orderError = action.payload
		},
		resetStep: (state) => {
			state.activeStep = 0
		},
	},
	extraReducers: (builder) => {
		builder.addCase(retrieveToken.fulfilled, (state, action) => {
			state.checkoutToken = action.payload as CheckoutToken
		})
	},
})

export const {
	formSubmission,
	nextStep,
	backStep,
	setOrder,
	setError,
	resetStep,
} = checkoutSlice.actions
export default checkoutSlice.reducer
