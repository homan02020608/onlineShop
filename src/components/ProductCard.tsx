"use client"
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import StarRateIcon from '@mui/icons-material/StarRate';
import { Timestamp, collection, getDocs, query, where } from 'firebase/firestore';

import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { increase } from '@/redux/cartSlice';




interface ProductInfoProps {
    timestamp?: Timestamp
    title: string
    productId: string
    category: string
}

const ProductCard = ({ title, productId, category }: ProductInfoProps) => {
    const dispatch = useDispatch()
    const quantity = 1

    return (
        <div className='flexCenter md:flex-row gap-2 flex-col lg:gap-20 '>
            <div className='flexCenter  w-[600px] p-8'>
                <Image src="/carouselImage02.jpeg" height={500} width={500} sizes='100vh' style={{width:"100%", height:"auto"}} alt='carouselImage02' />
            </div>

            <div className='flex justify-center m-6 w-auto min-h-[65vh]  '>
                <Card key={title} className='flex flex-col p-2 pb-10 w-auto h-full border-0 md:text-base text-lg shadow-none '>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>{[1, 2, 3, 4, 5].map((star) => (<StarRateIcon key={`star-${star}`} className='size-12 text-black/30' />))}</div>
                    </CardContent>
                    <CardContent>
                        <p><span className='font-semibold'>商品番号:</span> {productId}</p>
                    </CardContent>
                    <CardContent>
                        <Select>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="0" />
                            </SelectTrigger>
                            <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((selected) => (
                                    <SelectItem value={String(selected)} key={`selected-${selected}`}>{selected}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </CardContent>
                    <CardFooter className='mt-10'>
                        {/* <button className='w-full m-2 p-4 bg-sky-200 rounded-full hover:bg-sky-100' onClick={() => dispatch(addtoCart({title, productId ,quantity}))}>カートに入れる</button> */}
                        <button className='w-full m-2 p-4 bg-sky-200 rounded-full hover:bg-sky-100' onClick={() => dispatch(increase({title, productId ,quantity}))}>カートに入れる</button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default ProductCard