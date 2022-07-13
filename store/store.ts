import { configureStore } from '@reduxjs/toolkit'
import products from '../features/products'
import cart from '../features/cart'
import checkout from '../features/checkout'

export const store = configureStore({
	reducer: {
		products,
		cart,
		checkout,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
