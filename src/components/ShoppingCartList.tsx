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
import { remove } from '@/redux/cartSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link'
import QuantityCountButton from './QuantityCountButton'


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
                {cartItems.cart.length === 0 ?
                    <div className='flexCenter flex-col gap-10 mt-20 '>
                        <p className='font-semibold text-xl'>現在カートには商品が入っておりません</p>
                        <Link href="/" className="p-4 px-12 rounded-3xl border-2 border-zinc-400 transition-all hover:bg-zinc-200 duration-300 hover:cursor-pointer">お買い物を続ける</Link>
                    </div>
                    :
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
                                    <TableCell className='flexStart whitespace-nowrap rounded-xl'>
                                        <QuantityCountButton
                                            quantityAllow={quantityAllow}
                                            productId={productId}
                                            price={price}
                                            quantity={quantity}
                                        />
                                    </TableCell>
                                    <TableCell className="text-right ">{`￥${price * quantity}`}</TableCell>
                                    <TableCell className=' '>
                                        <button className={`p-2 text-xl hover:cursor-pointer ${!quantityAllow && "hidden"}`} onClick={() => { dispatch(remove({ productId, quantity, price })) }}><DeleteIcon /></button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                }
            </div>
        </div>
    )
}

export default ShoppingCartList