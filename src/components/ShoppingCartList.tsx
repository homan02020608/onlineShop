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

const cartList = [
    { productId: "124", price: "1200", quantity: 2, },
    { productId: "125", price: "1200", quantity: 3, },
    { productId: "126", price: "1200", quantity: 4, },
    { productId: "127", price: "1200", quantity: 2, },
    { productId: "128", price: "1200", quantity: 3, },
    { productId: "129", price: "1200", quantity: 4, },
    { productId: "130", price: "1200", quantity: 2, },
    { productId: "131", price: "1200", quantity: 3, },
    { productId: "132", price: "1200", quantity: 4, },
    { productId: "133", price: "1200", quantity: 2, },
    { productId: "134", price: "1200", quantity: 3, },
    { productId: "135", price: "1200", quantity: 4, },
    { productId: "136", price: "1200", quantity: 2, },
    { productId: "137", price: "1200", quantity: 3, },
    { productId: "138", price: "1200", quantity: 4, },
]

interface CardList {
    productId: string
    price: string
    quantity: number
}

interface CardItem {
    productId: string
    title: string
    quantity: number
}



const ShoppingCartList = () => {
    const cartItems = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    console.log(cartItems.cart)
    console.log("total", cartItems.total)

    return (
        <div className='flexCenter gap-10 w-full p-4 m-6 '>
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
                    {/*                        {cartList.map(({ productId, price, quantity }: CardList) => (
                            <TableRow key={productId} > 
                                <TableCell className="font-medium">Item-{productId}</TableCell>
                                <TableCell>￥{price}</TableCell>
                                <TableCell>{quantity}</TableCell>
                                <TableCell className="text-right">{`¥${Number(price) * quantity}`}</TableCell>
                            </TableRow>
                        ))} */}
                    {cartItems.cart.map(({ productId, title, quantity }: CardItem) => (
                        <TableRow key={`${productId}`}>
                            <TableCell>Item-{productId}</TableCell>
                            <TableCell>￥1200</TableCell>
                            <TableCell className='flexStart '>
                                <button className='p-2 m-2 text-xl  border border-gray-200' onClick={() => { dispatch(increase({ productId, quantity })) }}>+</button>
                                {quantity}
                                <button className='p-2 m-2 text-xl  border border-gray-200' onClick={() => { dispatch(decrease({ productId, quantity })) }}>-</button>
                            </TableCell>
                            <TableCell className="text-right">{`￥${1200 * quantity}`}</TableCell>
                            <TableCell className='flexCenter'>
                                <button className='p-2 m-2 text-xl  ' onClick={() => { dispatch(remove({ productId, quantity })) }}>X</button>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    )
}

export default ShoppingCartList