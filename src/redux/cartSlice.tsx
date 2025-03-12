import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        amount:0,
        total: 0
    },
    reducers: {
        addtoCart: (state, action:PayloadAction<any>) => {
            state.cart.push(action.payload)
        },
        increase : (state, action:PayloadAction<any>) => {
            const cartItem : any = state.cart.find((item : {productId : string}) => item.productId === action.payload.productId)
            if (cartItem){
                cartItem.quantity += 1
                state.amount += 1200
            }else{
                state.cart.push(action.payload)
                state.amount += 1200
            }
        },
        total : (state) => {
            let amount = 0;
            let total = 0;
            for (const item of state.cart){
                amount += item.quantity
                total += item.quantity * 1200
            }
            state.amount = amount
            state.total = total
        }
    }
})

export default cartSlice.reducer;
export const { addtoCart, increase ,total } = cartSlice.actions;