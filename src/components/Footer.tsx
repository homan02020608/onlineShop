"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer
      className='flexCenter flex-col bottom-0 border-t-2 w-full mt-auto  text-black  bg-transparent pb-8'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <div className='flex  p-2 m-4 gap-20 text-sm'>
        {/* Contact us */}
        <div className='flex flex-row gap-2 whitespace-nowrap '>
          <Link href="/qna" className='hover:underline hover:cursor-pointer text-xs md:text-sm'><li>よくある質問</li></Link>
          <Link href="/contact" className='hover:underline hover:cursor-pointer text-xs md:text-sm'><li>問い合わせ</li></Link>
          <Link href="/guide" className='hover:underline hover:cursor-pointer text-xs md:text-sm'><li>利用ガイド</li></Link>
        </div>

      </div>

      <div>©HO-ONLINESHOP</div>
    </motion.footer>
  )
}

export default Footer