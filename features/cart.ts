import { Cart } from '@chec/commerce.js/types/cart'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { commerce } from '../lib/commerce'

export interface CartManipulationProps {
	productId: string
	quantity: number
}

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
	const cartId = await commerce.cart.retrieve()
	return cartId
})

export const addToCart = createAsyncThunk(
	'cart/addToCart',
	async ({ productId, quantity }: CartManipulationProps) => {
		const res = await commerce.cart.add(productId, quantity)

		return res
	}
)

export const updateItemQty = createAsyncThunk(
	'cart/updateItemQty',
	async ({ productId, quantity }: CartManipulationProps) => {
		const res = await commerce.cart.update(productId, { quantity })
		return res
	}
)

export const deleteItemFromCart = createAsyncThunk(
	'cart/deleteItemFromCart',
	async (productId: string) => {
		const res = await commerce.cart.remove(productId)
		return res
	}
)

const initialState = {
	data: {} as Cart,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCart.fulfilled, (state, action) => {
				state.data = action.payload as Cart
			})
			.addCase(addToCart.fulfilled, (state, action) => {
				state.data = action.payload as unknown as Cart
			})
			.addCase(updateItemQty.fulfilled, (state, action) => {
				state.data = action.payload as unknown as Cart
			})
			.addCase(deleteItemFromCart.fulfilled, (state, action) => {
				state.data = action.payload as unknown as Cart
			})
	},
})

export default cartSlice.reducer
