import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import { useDispatch } from 'react-redux'


export const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]

export const useAppDispatch = useDispatch.withTypes<AppDispatch>

