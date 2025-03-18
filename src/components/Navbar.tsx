"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AuthButton from './AuthButton';
import { useUser } from '@clerk/nextjs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { signIn, signOut } from '@/redux/userSlice';

const Navbar = () => {
    const { isSignedIn, user } = useUser();

    const userState = useSelector((state: RootState) => state.user.user)

    const dispatch = useDispatch();

    useEffect(() => {
        if (isSignedIn) {
            dispatch(signIn({
                id: user.id,
                email: user?.primaryEmailAddress?.emailAddress ,
                first_name: user.firstName,
                last_name: user.lastName,
            }))
        } else {
            dispatch(signOut())
        }
    }, [isSignedIn])

    //console.log("UserState:", userState)
   
    
    return (
        <nav className='flexBetween top-0 bg-white/50 opacity-100  p-1 min-h-[10vh] shadow-md'>
            <div className='flex justify-center items-center font-semibold text-gray-500  m-2 p-2 text-xl'>
                <Link href="/">
                    WebShop
                </Link>
            </div>

            <div className='flexCenter p-2 pr-10 left-0 '>
                <div className='flex gap-2 font-normal text-gray-500 md:gap-6 lg:gap-10'>
                    <div className='flexCenter p-2 opacity-0 md:opacity-100'>
                        <div className='flexCenter bg-slate-100 min-w-[10px] max-w-3xl h-[50px] rounded-full relative hidden md:min-w-[300px]'>
                            <input type="text" className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-full pl-4 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 ' placeholder='キーワードを入力' />
                            <button type='button' className='p-2'><SearchIcon /></button>
                        </div>
                    </div>

                    <Link href="/userFavorite" className='hidden md:flexCenter flex-col p-2 rounded-2xl hover:bg-slate-50 text-sm md:text-base whitespace-nowrap '>
                        <FavoriteIcon />
                        <p >気に入り</p>
                    </Link>
                    <Link href="/shoppingCart" className='flexCenter flex-col p-2 rounded-2xl hover:bg-slate-50 text-sm md:text-base whitespace-nowrap'>
                        <ShoppingCartIcon />
                        <p className='hidden md:flex'>カート</p>
                    </Link>

                    <AuthButton />

                    <Link href="/" className='flexCenter flex-col bg-slate-200 px-2 rounded-full' >
                        <MenuIcon />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar