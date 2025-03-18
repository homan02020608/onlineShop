import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import { useDispatch } from 'react-redux'
import userSlice from './userSlice';


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice,
    }
})

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>

export type AppDispatch = AppStore["dispatch"]

export const useAppDispatch = useDispatch.withTypes<AppDispatch>

