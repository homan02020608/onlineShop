"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Navbar = () => {
    const [ login ,setLogin ] = useState(false);
    return (
        <nav className='flex justify-between items-center bg-white/50 opacity-100 w-full p-1 min-h-[10vh] shadow-md'>
            <div className='flex justify-center items-center font-semibold text-gray-500  m-2 p-2 text-xl'>
                <Link href="/">
                    WebShop
                </Link>
            </div>

            <div className='flex justify-center items-center p-2 mr-10 top-0'>
                <div className='flex gap-14 font-normal text-gray-500  '>
                    {login ?
                        (<Link href="/" className='flex flex-col justify-center items-center p-2 rounded-2xl hover:bg-slate-100 'onClick={() => setLogin(!login)}>
                            <PersonIcon className='' />
                            <p>ログイン</p>
                        </Link>
                        ) : (
                            <Link href="/" className='flex flex-col justify-center items-center p-2 rounded-2xl hover:bg-slate-100'onClick={() => setLogin(!login)}>
                                <PersonIcon className='' />
                                <p>マイページ</p>
                            </Link>
                        )
                    }
                    <Link href="/" className='flex flex-col justify-center items-center p-2 rounded-2xl hover:bg-slate-100'>
                        <FavoriteIcon />
                        <p>気に入り</p>
                    </Link>
                    <Link href="/" className='flex flex-col justify-center items-center p-2 rounded-2xl hover:bg-slate-100'>
                        <ShoppingCartIcon />
                        <p>カート</p>
                    </Link>
                    <Link href="/" className='flex flex-col justify-center items-center bg-slate-300 px-2 rounded-full' >
                        <MenuIcon />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar