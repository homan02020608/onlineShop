'use client'
import Link from 'next/link'
import React, { useState } from 'react'

interface AnimationLinkProps {
    children : React.ReactNode
    href : string
    title : string
}

const AnimationLink = ({ children, href ,title }: AnimationLinkProps) => {
    const [open, setOpen] = useState(false)
    return (
        <Link
            href={href}
            className='hidden md:flexCenter flex-col p-2 rounded-2xl  text-sm  whitespace-nowrap '
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {children}
            <div className='flex relative'>
                <span
                    style={{transform : open ? "scaleX(1)" : "scaleX(0)"}}
                    className='absolute -bottom-2 -left-2 -right-2 h-[2px] origin-left rounded-full bg-slate-300 transition-transform duration-300 ease-out'
                />
                {title}
            </div>
        </Link>
    )
}

export default AnimationLink