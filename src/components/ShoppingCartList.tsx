"use client"
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { decrease, increase, remove, total } from '@/redux/cartSlice'


interface CardItem {
    productId: string
    title: string
    quantity: number
    price : number
}



const ShoppingCartList = () => {
    const cartItems = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    return (
        <div className='flexCenter gap-10 w-full p-2 m-4'>
            <Table className='border-y-2 '>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader className='font-bold '>
                    <TableRow>
                        <TableHead className="w-[100px]">Item</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=''>
                    {cartItems.cart.map(({ productId, title, quantity , price }: CardItem) => (
                        <TableRow key={`${productId}`}>
                            <TableCell>Item-{productId}</TableCell>
                            <TableCell>￥{price}</TableCell>
                            <TableCell className='flexStart '>
                                <button className='p-2 m-2 text-xl  border border-gray-200' onClick={() => { dispatch(increase({ productId ,price})) }}>+</button>
                                {quantity}
                                <button className='p-2 m-2 text-xl  border border-gray-200' onClick={() => { dispatch(decrease({ productId , price})) }}>-</button>
                            </TableCell>
                            <TableCell className="text-right">{`￥${price * quantity}`}</TableCell>
                            <TableCell className='flexCenter'>
                                <button className='p-2 m-2 text-xl  ' onClick={() => { dispatch(remove({ productId, quantity , price})) }}>X</button>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    )
}

export default ShoppingCartList