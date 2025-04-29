"use client"
import { decrease, increase } from '@/redux/cartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

interface QuantityCountProps {
    quantityAllow: boolean
    productId: string
    price: number
    quantity: number
}

/* 商品項目ではなくカートに入れた全部商品の数をカウント*/
const QuantityCountButton = ({ quantityAllow, productId, price, quantity }: QuantityCountProps) => {
    const dispatch = useDispatch()

    return (
        <div className='border-2 border-slate-300 rounded-3xl flexCenter w-20'>
            <button className={` px-2 m-1 text-lg  ${!quantityAllow && "hidden"}`} onClick={() => { dispatch(increase({ productId, price })) }}>+</button>
            <span>{quantity}</span>
            <button className={` px-2 m-1 text-lg  ${!quantityAllow && "hidden"}`} onClick={() => { dispatch(decrease({ productId, price })) }}>-</button>
        </div>
    )
}

export default QuantityCountButton