"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { decrease, increase } from '@/redux/cartSlice'

interface CardItem {
    productId: string
    title: string
    quantity: number
}

const DropdownCart = () => {
    const [open, setOpen] = useState(true);
    const cartItems = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <div
            className='relative w-fit h-fit p-2 mt-2 rounded-2xl  text-sm  whitespace-nowrap '
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div className='relative'>
                <span
                    style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
                    className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-slate-300 transition-transform duration-300 ease-out'
                />
                カート
            </div>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    style={{ translateX: "-50%" }}
                    className='absolute top-12 z-30 left-1/2  bg-slate-200 text-black'
                >
                    <div className='absolute -top-6 left-0 right-0 h-2 bg-transparent ' />
                    <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-200' />
                    <div className='flex flex-col justify-start h-96 w-96 p-4 shadow-xl overflow-scroll gap-6'>
                        {cartItems.cart.map(( {productId , quantity, title} : CardItem) => (
                            <div key={productId} className='flex flex-row whitespace-normal text-sm' >
                                <div>{title}</div>
                                <div className=' whitespace-nowrap'>
                                    <button className='p-2 m-2  border border-gray-500' onClick={() => { dispatch(increase({ productId, quantity })) }}>+</button>
                                    {quantity}
                                    <button className='p-2 m-2  border border-gray-500' onClick={() => { dispatch(decrease({ productId, quantity })) }}>-</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default DropdownCart