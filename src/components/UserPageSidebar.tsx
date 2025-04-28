"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const sidebarInfo = [
    { column: "会員情報照会、変更" ,path:"/user/userPage/userOrder"},
    { column: "お届け先の確認、登録、変更",path:"/user/userOrder"},
    { column: "注文履歴" ,path:"/user/userOrder"},
    { column: "お気に入り" ,path:"/user/userFavourite"},
]

const UserPageSidebar = () => {
    return (
        <motion.div 
            className='flex flex-col justify-center gap-16 border-4 shadow-2xl bg-white/50 rounded-xl pb-16 '
            initial={{ opacity: 0 , x : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ease:"easeInOut", duration: 0.8}}
        >
                <h1 className='text-md p-2 m-2  whitespace-nowrap'>マイページ</h1>
                {sidebarInfo.map((info,i) => (
                    <Link href={info.path} className='flex text-sm md:text-md min-w-[80px] max-w-[300px] text-indigo-600 p-2 m-2 rounded-md hover:bg-gray-100 hover:cursor-pointer hover:font-semibold hover:underline'key={`column-${i}`}>{info.column}</Link>
                ))}
        </motion.div>
    )
}

export default UserPageSidebar