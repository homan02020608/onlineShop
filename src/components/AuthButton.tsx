"use client"
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';
import LogoutIcon from '@mui/icons-material/Logout';




const AuthButton = () => {
    //const { user } = useUser();
    const [open, setOpen] = useState(false)
    return (
        <>
            {/* ログイン後 */}
            <SignedIn>
                <Link
                    href={`/user`}
                    className='flexCenter flex-col p-2 rounded-2xl text-sm whitespace-nowrap '
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    <PersonIcon />
                    <div className='hidden md:flex relative'>
                        マイページ
                        <span
                            style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
                            className='absolute -bottom-2 -left-2 -right-2 h-[2px] origin-left rounded-full bg-slate-300 transition-transform duration-300 ease-out'
                        />
                    </div>
                </Link>
                <div className='hidden md:flexCenter '>
                    <SignOutButton >
                        <div className='hover:cursor-pointer hover:scale-125 transition-transform'><LogoutIcon/></div>    
                    </SignOutButton>
                </div>
            </SignedIn>

            {/* ログイン前 */}
            <SignedOut>
                <SignInButton mode='modal'>
                    <button
                        className='flexCenter flex-col p-2 rounded-2xl text-sm  whitespace-nowrap'
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <PersonIcon />
                        <div className='hidden md:flex relative'>
                            <span
                                style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
                                className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-slate-300 transition-transform duration-300 ease-out'
                            />
                            ログイン
                        </div>
                    </button>
                </SignInButton>
            </SignedOut>
        </>
    )
}

export default AuthButton