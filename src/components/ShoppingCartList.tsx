"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { decrease, increase, remove } from '@/redux/cartSlice'


interface CardItem {
    productId: string
    title: string
    quantity: number
    price: number
}



const ShoppingCartList = ({ quantityAllow }: { quantityAllow: boolean }) => {
    const cartItems = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    return (
        <div className='flexCenter gap-10 w-full p-2 '>
            <div className='m-4 w-full '>
                <Table className='border-y-2 '>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader className='font-bold '>
                        <TableRow>
                            <TableHead className="w-[300px]">Item</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className=''>
                        {cartItems.cart.map(({ productId, title, quantity, price }: CardItem) => (
                            <TableRow key={`${productId}`} className='items-center'>
                                <TableCell>{title}</TableCell>
                                <TableCell>￥{price}</TableCell>
                                <TableCell className='flexStart whitespace-nowrap '>
                                    <button className={`p-2 m-1 text-sm  border border-gray-200 ${!quantityAllow && "hidden"}`} onClick={() => { dispatch(increase({ productId, price })) }}>+</button>
                                    {quantity}
                                    <button className={`p-2 m-1 text-sm  border border-gray-200 ${!quantityAllow && "hidden"}`} onClick={() => { dispatch(decrease({ productId, price })) }}>-</button>
                                </TableCell>
                                <TableCell className="text-right ">{`￥${price * quantity}`}</TableCell>
                                <TableCell className=' '>
                                    <button className={`p-2 text-xl ${!quantityAllow && "hidden"}`} onClick={() => { dispatch(remove({ productId, quantity, price })) }}>X</button>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default ShoppingCartList