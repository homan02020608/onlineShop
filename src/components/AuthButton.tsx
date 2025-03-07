"use client"
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut,  SignOutButton, useUser} from '@clerk/nextjs';




const AuthButton = () => {
    const { user } = useUser();
    return (
        <>
            {/* ログイン後 */}
            <SignedIn>
                <Link href={`/userPage/${user?.id}`} className='flexCenter flex-col p-2 rounded-2xl hover:bg-slate-50 text-sm md:text-base whitespace-nowrap '>
                    <PersonIcon className='' />
                    <p className='hidden md:flex'>マイページ</p>
                </Link>
                <SignOutButton/>
            </SignedIn>

            {/* ログイン前 */}
            <SignedOut>
                <SignInButton mode='modal'>
                    <button className='flexCenter flex-col  p-2 rounded-2xl hover:bg-slate-50 text-sm md:text-base whitespace-nowrap'>
                        <PersonIcon className='' />
                        <p className='hidden md:flex'>ログイン</p>
                    </button>
                </SignInButton>
            </SignedOut>
        </>
    )
}

export default AuthButton