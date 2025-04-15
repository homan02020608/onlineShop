"use client"
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'

const MenuButton = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen)

    return (
        <div className='flexCenter md:opacity-0 flex-col bg-slate-200 px-2 rounded-full relative hover:cursor-pointer w-full '>
            <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen &&
                <div className='absolute flexCenter flex-col text-lg  text-black top-16  w-full bg-slate-200 gap-4 font-light transform transition-transform opacity-100 ' >
                    test
                </div>
            }
        </div>
    )
}

export default MenuButton