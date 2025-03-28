"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"

const DropdownCart = () => {
    const [open, setOpen] = useState(true)
    return (
        <button
            className='relative w-fit h-fit p-2 mt-2 rounded-2xl  text-sm  whitespace-nowrap '
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div className='relative'>
                <span
                    style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
                    className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-slate-300 transition-transform duration-300 ease-out'
                />
                カート
            </div>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    style={{ translateX: "-50%" }}
                    className='absolute top-12 z-30 left-1/2  bg-slate-200 text-black'
                >
                    <div className='absolute -top-6 left-0 right-0 h-2 bg-transparent' />
                    <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-200' />
                    <Content />
                </motion.div>
            )}
        </button>
    )
}

const Content = () => {
    return (
        <div className='flex flex-col h-64 w-64  p-6 shadow-xl overflow-scroll '>
                <p>order:01 </p>
                <p>order:01 </p>
                <p>order:01 </p>
                <p>order:01 </p>
                <p>order:01 </p>
                <p>order:01 </p>
                <p>order:01 </p>
                <p>order:01 </p>
    
        </div>
    )
}

export default DropdownCart