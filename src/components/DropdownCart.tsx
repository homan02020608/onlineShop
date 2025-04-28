"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'
import CartCount from './CartCount'
import QuantityCountButton from './QuantityCountButton'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete';
import { remove } from '@/redux/cartSlice'

interface CardItem {
    productId: string
    title: string
    quantity: number
    price: number
    imageUrl: string
}

const DropdownCart = () => {
    const [open, setOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <div
            className='flexCenter flex-col relative w-fit h-fit rounded-2xl  text-sm  whitespace-nowrap '
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Link href="/shoppingCart" className='relative flexCenter flex-col'>
                <ShoppingCartIcon />
                <CartCount />
                <div className='hidden md:flex'>カート</div>
            </Link>


            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    style={{ translateX: "-50%" }}
                    className='hidden md:flex flex-col absolute top-12 z-50 left-1/2  bg-slate-100 text-black rounded-xl'
                >
                    <div className='absolute -top-6 left-0 right-0 h-2 bg-transparent ' />
                    <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-100' />
                    <h1 className=' z-20 pt-2 pl-4 font-semibold left-0 '>カート商品({cartItems.cartCount}点)</h1>
                    <div className='flex flex-col justify-start h-80 w-80  shadow-xl overflow-auto gap-2'>
                        {cartItems.cart.map(({ productId, quantity, title, price, imageUrl }: CardItem) => (
                            <motion.div
                                key={productId}
                                className='flexCenter flex-row whitespace-normal text-sm m-4'
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileTap={{ opacity: 0, x: -50 }}
                               
                                transition={{ ease: "easeInOut", duration: 0.5 }}
                            >
                                <Link href={`/product/${productId}`}>
                                    <Image src={`/${imageUrl}`} width={100} height={100} alt={productId} />
                                </Link>
                                <div className='flexCenter flex-col whitespace-pre-wrap m-2'>
                                    <div className='flexCenter flex-row'>
                                        <div>{title}</div>
                                        <motion.button  className={`text-sm hover:cursor-pointer`} onClick={() => { dispatch(remove({ productId, quantity, price })) }}><DeleteIcon /></motion.button>
                                    </div>

                                    <div className='flexCenter flex-row gap-x-10 pt-2'>
                                        <QuantityCountButton
                                            quantityAllow={true}
                                            productId={productId}
                                            price={price}
                                            quantity={quantity}
                                        />
                                        <div>￥{price}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default DropdownCart