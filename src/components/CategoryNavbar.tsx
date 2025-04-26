"use client"
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { CATEGORY_NAV } from '../../constants'
import Link from 'next/link'
import { motion } from "framer-motion"


interface categoryItems {
    column: string;
    menu?: any
}


const CategoryNavbar = () => {
    return (
        <motion.div 
            className='gap-2 max-container md:flexCenter md:flex-row md:p-2 md:rounded-3xl '
            initial={{ opacity: 0 , x : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ease:"easeInOut", duration: 0.6}}
        >
            {CATEGORY_NAV.map((category:categoryItems) => (
                <div className='hidden md:flex ' key={`${category.column}`}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className=''>{category.column}</NavigationMenuTrigger>
                                <NavigationMenuContent className='flex flex-col duration-500'>
                                  {category.menu?.map(({ item, path } : {item:string, key:string, path:string})=> (
                                     <Link href={`${path}`} key={`${category.column}-${item}`} className='whitespace-nowrap my-2 p-4 hover:text-slate-400 hover:border-purple-200 hover:border-b-2 '>{item}</Link>
                                  ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            ))}
        </motion.div>
    )
}

export default CategoryNavbar