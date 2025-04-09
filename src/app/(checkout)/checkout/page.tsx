"use client"
import React from 'react'
import { loadStripe } from "@stripe/stripe-js"
import {
    Elements,
    EmbeddedCheckout,
    EmbeddedCheckoutProvider
  } from '@stripe/react-stripe-js'
import CheckoutPage from '@/components/CheckoutPage'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'



if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const page = () => {

    const amount = useSelector((state : RootState) =>  state.cart.amount)

    return (
        <div className='flex flex-col p-4 m-4 bg-slate-100 mx-auto max-w-6xl '>
            <div className='mb-10'>
                <h1 className='text-3xl font-extrabold mb-2'>Test</h1>
                <h2 className='text-xl'>
                    has requested :
                    <span className='font-bold'> ${amount}</span>
                </h2>
            </div>
            <Elements
                stripe={stripePromise}
                options={{
                    mode:"payment",
                    amount : amount,
                    currency: "jpy"
                }}
            >
                <CheckoutPage amount={amount}/>
            </Elements>

        </div>
    )
}

export default page