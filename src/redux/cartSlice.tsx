import { PayloadAction, createSlice } from "@reduxjs/toolkit";


/* interface InitialCartState {
    cart : [
        null | {
            id:string
            title:string
            productId:string 
            quantity:number 
            price :number
        }
    ]
} */

type initialCartState = any[]

const initialCart: initialCartState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: initialCart,
        cartCount: 0,
        amount: 0,
        shipping: 0
    },
    reducers: {
        increase: (state, action: PayloadAction<any>) => {
            const cartItem: any = state.cart.find((item: { productId: string }) => item.productId === action.payload.productId)
            if (!cartItem) {
                state.cart.push(action.payload)
                state.amount += action.payload.price * action.payload.quantity
                state.cartCount += action.payload.quantity

            } else if (cartItem && action.payload.quantity && action.payload.price) {
                cartItem.quantity += action.payload.quantity
                state.amount += action.payload.price * action.payload.quantity
                state.cartCount += action.payload.quantity
            } else {
                cartItem.quantity += 1
                state.amount += action.payload.price
                state.cartCount += 1
            }
        },
        decrease: (state, action: PayloadAction<any>) => {
            const cartItem: any = state.cart.find((item: { productId: string }) => item.productId === action.payload.productId)
            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity -= 1
                state.amount -= action.payload.price
                state.cartCount -= 1
            }
        },
        remove: (state, action: PayloadAction<any>) => {
            state.amount -= action.payload.quantity * action.payload.price
            state.cartCount = 0
            state.cart = state.cart.filter((item: { productId: string }) => item.productId !== action.payload.productId)

        },
        addShipping: (state) => {
            if (state.amount < 5000) {
                state.shipping = 660
            } else {
                state.shipping = 0
            }
        }
    }
})

export default cartSlice.reducer;
export const { increase, decrease, remove, addShipping } = cartSlice.actions;