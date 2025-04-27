"use client"
import React from 'react'
import { loadStripe } from "@stripe/stripe-js"
import {
    Elements,
} from '@stripe/react-stripe-js'
import CheckoutPage from '@/components/CheckoutPage'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import ShoppingCartList from '@/components/ShoppingCartList'


if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {

    const amount = useSelector((state : RootState) =>  state.cart.amount)
    const shipping = useSelector((state : RootState) =>  state.cart.shipping)
    
    
    return (
        <div className='flex flex-col md:flex-row md:w-full p-4 m-4 gap-10 mx-auto max-w-6xl '>
            <div className=' w-full md:w-2/3'>
                <ShoppingCartList quantityAllow={false} />
            </div>
            <div className='bg-slate-100 w-full md:w-1/3 p-4 '>
                <div className='mb-10'>
                    <h1 className='text-3xl font-extrabold mb-2'>Test</h1>
                    <h2 className='text-xl'>
                        has requested :
                        <span className='font-bold'> ${amount + shipping}</span>
                    </h2>
                </div>
                <Elements
                    stripe={stripePromise}
                    options={{
                        mode: "payment",
                        amount: amount,
                        currency: "jpy"
                    }}
                >
                    <CheckoutPage amount={amount + shipping} />
                </Elements>
            </div>
        </div>
    )
}

export default Checkout