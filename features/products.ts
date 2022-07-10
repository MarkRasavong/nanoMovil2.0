import { Product } from '@chec/commerce.js/types/product'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { commerce } from '../lib/commerce'

interface ProductSliceInitState {
	products: Product[]
}

const initialState: ProductSliceInitState = {
	products: [],
}
export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async () => {
		const { data: products } = await commerce.products.list()
		return products
	}
)

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products = action.payload
		})
	},
})

export default productsSlice.reducer
