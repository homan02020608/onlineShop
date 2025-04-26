"use client "
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const CartCount = () => {
    const cartItems = useSelector((state : RootState) => state.cart.cartCount); 
  return (
    <div className='absolute bg-slate-200 text-black size-6 text-[14px] -right-3 -top-1 rounded-full grid place-items-center '>
        {cartItems}
    </div>
  )
}

export default CartCount