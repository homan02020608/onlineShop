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
            if (!cartItem) {
                state.cart.push(action.payload)
                state.amount += action.payload.price * action.payload.quantity


            } else if(cartItem && action.payload.quantity && action.payload.price) {
                cartItem.quantity += action.payload.quantity
                state.amount += action.payload.price * action.payload.quantity
            } else {
                cartItem.quantity += 1
                state.amount += action.payload.price
            }
        },
        decrease: (state, action: PayloadAction<any>) => {
            const cartItem: any = state.cart.find((item: { productId: string }) => item.productId === action.payload.productId)
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity -= 1
                state.amount -= action.payload.price
            }
        },
        remove: (state, action: PayloadAction<any>) => {
            state.amount -= action.payload.quantity * action.payload.price
            state.cart = state.cart.filter((item: { productId: string }) => item.productId !== action.payload.productId)

        },
        total: (state) => {
            let sum = 0

            state.cart.map((item: { quantity: number }) => (
                state.amount += item.quantity * 1200
            ))
        }
    }
})

export default cartSlice.reducer;
export const { increase, decrease, remove, total } = cartSlice.actions;