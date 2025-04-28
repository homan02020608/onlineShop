"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

interface RecentViewedItem {
    productId: string
    title: string
    imageUrl: string
}

export const saveRecentViewedItems = (item: RecentViewedItem) => {
    const existing = JSON.parse(localStorage.getItem("viewedItems") || '[]');

    const filteredItem = existing.filter((items: RecentViewedItem) => items.productId !== item.productId);

    const updateItem = [item, ...filteredItem];

    const limitedItem = updateItem.slice(0, 4);

    localStorage.setItem('viewedItems', JSON.stringify((limitedItem)))
}

export const getRecentViewedItems = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('viewedItems') || '[]')
    }
    return [];
}

const RecentViewedItemList = () => {
    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        setItems(getRecentViewedItems());
    }, [])

    return (
        <motion.div 
            className='flexCenter max-container w-full flex-col mt-20 '
            initial={{ opacity: 0 , x : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ease:"easeInOut", duration: 1}}
        >
            <h1 className='text-3xl font-light my-4'>最近閲覧の商品</h1>
            <div className='flexCenter flex-col rounded-3xl sm:w-[30rem]  md:w-[50rem] shadow-2xl'>
                {(items.length === 0) ?
                    <div>最近閲覧の商品なし</div>
                    :
                    <div className='flexCenter flex-col rounded-3xl sm:w-[30rem] md:w-[50rem] shadow-2xl'>
                    <div className='grid grid-cols-2 md:grid-cols-4  p-2 m-2 '>
                        {items.map((item: RecentViewedItem, index) => (
                            <div key={`${item.productId}-${index}`} className='w-[10rem] hover:scale-105 hover:transition-transform'>
                                <Link href={`/product/${item.productId}`}>
                                    <Image src={`/${item.imageUrl}`} alt={String(item.title)} width={200} height={200} />
                                </Link>
                                <div className=' whitespace-pre-wrap p-1 font-thin text-xs md:text-base'>{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
                }
            </div>
        </motion.div>
    )
}

export default RecentViewedItemList