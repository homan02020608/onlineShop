"use client"
import { RootState } from '@/redux/store'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const OrderSummary = () => {
    const amount = useSelector((state : RootState) => state.cart.amount)
    
    return (
        <div >
            <div className='flex flex-col border border-gray-400 p-2 mx-4 whitespace-nowrap w-full md:w-[400px] '>
                <h1 className='font-medium text-xl m-2 '>Order Summary</h1>
                <div className='flex-col p-4  *:flexBetween w-full'>
                    <div className='gap-x-10'>
                        <div>Total:</div>
                        <div>￥{amount}</div>
                    </div>
                    <div className='gap-x-10'>
                        <div>Shipping:</div>
                        <div>￥660</div>
                    </div>
                    <div className='gap-x-10 border-t-2 border-gray-200 mt-4'>
                        <div>Point:</div>
                        <div>350</div>
                    </div>
                    <div className='gap-x-10'>
                        <div>Coupon:</div>
                        <div>なし</div>
                    </div>

                    <div>
                        <Link href="/checkout" className={`flexCenter bg-black/80 text-white rounded-none w-full px-2 my-4 hover:bg-black/60 ${amount === 0 && "pointer-events-none"}`}> CheckOut </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary