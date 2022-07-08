import { ProductCollection } from '@chec/commerce.js/features/products'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { commerce } from '../lib/commerce'

interface ProductSliceInitState {
	products: ProductCollection[]
	isLoading: boolean
}

const initialState: ProductSliceInitState = {
	products: [],
	isLoading: false,
}
export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const data = await commerce.products.list()
		return data
	}
)

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products.push(action.payload)
			})
	},
})

export default productsSlice.reducer
