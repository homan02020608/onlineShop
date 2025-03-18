import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        amount: 0,
        total: 0
    },
    reducers: {
        increase: (state, action: PayloadAction<any>) => {
            const cartItem: any = state.cart.find((item: { productId: string }) => item.productId === action.payload.productId)
            if (cartItem) {
                cartItem.quantity += 1
                state.total += 1200

            } else {
                state.cart.push(action.payload)
                state.total += 1200
            }
        },
        decrease: (state, action: PayloadAction<any>) => {
            const cartItem: any = state.cart.find((item: { productId: string }) => item.productId === action.payload.productId)
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity -= 1
                state.total -= 1200
            }
        },
        remove: (state, action) => {
            state.total -= action.payload.quantity * 1200
            state.cart = state.cart.filter((item: { productId: string }) => item.productId !== action.payload.productId)

        },
        total: (state) => {
            let sum = 0

            state.cart.map((item: { quantity: number }) => (
                state.total += item.quantity * 1200
            ))
        }
    }
})

export default cartSlice.reducer;
export const { increase, decrease, remove, total } = cartSlice.actions;