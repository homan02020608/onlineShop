"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { decrease, increase } from '@/redux/cartSlice'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'

interface CardItem {
    productId: string
    title: string
    quantity: number
    price: number
}

const DropdownCart = () => {
    const [open, setOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <div
            className='flexCenter flex-col relative w-fit h-fit  rounded-2xl  text-sm  whitespace-nowrap '
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Link href="/shoppingCart" className='flexCenter flex-col'>
                <ShoppingCartIcon />
                <div className='hidden md:flex'>カート</div>
            </Link>


            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    style={{ translateX: "-50%" }}
                    className='hidden md:flex absolute top-12 z-30 left-1/2  bg-slate-200 text-black'
                >
                    <div className='absolute -top-6 left-0 right-0 h-2 bg-transparent ' />
                    <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-200' />
                    <div className='flex flex-col justify-start h-96 w-96 p-4 shadow-xl overflow-scroll gap-6'>
                        {cartItems.cart.map(({ productId, quantity, title, price }: CardItem) => (
                            <div key={productId} className='flex flex-row whitespace-normal text-sm' >
                                <div>{title}</div>
                                <div className=' whitespace-nowrap'>
                                    <button className='p-2 m-2  border border-gray-500' onClick={() => { dispatch(increase({ productId, price })) }}>+</button>
                                    {quantity}
                                    <button className='p-2 m-2  border border-gray-500' onClick={() => { dispatch(decrease({ productId, price })) }}>-</button>
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