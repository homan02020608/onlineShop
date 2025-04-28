"use client"
import { Timestamp, collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"

interface NewItemListProps {
    title?: string
    productId?: string
    category?: string
    imageUrl?: string
    price?: number
    bookmarked?: boolean
    id?: string
    update_At?: Timestamp
    create_At?: Timestamp
    stock?: number
}

const NewItemList = () => {
    const [itemList, setItemList] = useState<NewItemListProps[]>([]);
    const fetchNewItemData = async () => {
        try {
            const newItemsSnapShot = await getDocs(query(collection(db, "products"), orderBy('create_At', 'desc'), limit(8)))
            const newItems = newItemsSnapShot.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }))
            setItemList(newItems)
        } catch (error) {
            console.error(error)
        }

    }
    useEffect(() => {
        fetchNewItemData();
    }, [])
    
    return (
        <motion.div 
            className='flexCenter w-full flex-col mt-8 '
            initial={{ opacity: 0 , x : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ease:"easeInOut", duration: 1}}
        >
            <h1 className='text-3xl font-light my-4 '>新着商品</h1>
            <div className='flexCenter flex-col rounded-3xl sm:w-[30rem] md:w-[50rem] shadow-2xl'>
                <div className='grid grid-cols-2 md:grid-cols-4  p-2 m-2 '>
                    {itemList.map((item: NewItemListProps, index) => (
                        <div key={`${item.productId}-${index}`} className='w-[10rem] hover:scale-105 hover:transition-transform'>
                            <Link href={`/product/${item.productId}`}>
                                <Image src={`/${item.imageUrl}`} alt={String(item.title)} width={200} height={200} />
                            </Link>
                            <div className=' whitespace-pre-wrap p-1 font-thin text-xs md:text-base'>{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default NewItemList