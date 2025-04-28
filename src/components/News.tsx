"use client"
import { Timestamp, collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import Link from 'next/link'
import { motion } from "framer-motion"

type newsItems = {
    title?: string
    new_url?: string
    create_At?: Timestamp
    update_At?: Timestamp
    newProductId?: number
    Id?: string

}
const News = () => {
    const pathname = usePathname()
    const [news, setNews] = useState<newsItems[]>([]);
    const fetchNewsData = async () => {
        try {
            const newsSnapShot = await getDocs(query(collection(db, "news"), orderBy('create_At', 'desc'), limit((pathname == "/" ? 5 : 10))));
            const news = newsSnapShot.docs.map((doc) => ({
                ...doc.data(), Id: doc.id
            }))
            setNews(news)
        } catch (error) {
            console.error(error)
        }

    }
    useEffect(() => {
        fetchNewsData();
    }, [])
    
    return (
        <motion.div 
            className='flexCenter w-full  mt-8 '
            initial={{ opacity: 0 , x : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ease:"easeInOut", duration: 0.8}}
        >
            <div className='flex flex-col rounded-3xl  w-auto md:w-[50rem]  m-8 px-4 bg-zinc-100 shadow-2xl '>
                <h1 className={`text-2xl pt-4 pl-4 ${(pathname === "/news") && "hidden"}`}>ニュース</h1>
                {news.map((info) => (
                    <div key={info.Id} className='flex flex-col px-8 py-4    '>
                        <div>{info.create_At?.toDate().toLocaleDateString("ja-JP")}</div>
                        <Link href={`product/${info.newProductId}`} className='font-thin hover:underline '>{info.title}</Link>
                    </div>
                ))}
                {(pathname != "/news") &&
                    <Link href={'/news'} className='flexCenter p-2 m-4 rounded-lg border-2 border-gray-300 hover:bg-gray-50 font-light hover:font-semibold transition-all duration-300'>View More</Link>
                }
            </div>
        </motion.div>
    )
}

export default News