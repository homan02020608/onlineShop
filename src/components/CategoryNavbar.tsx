import React, { ReactNode } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { CATEGORY_NAV } from '../../constants'
import Link from 'next/link'

interface categoryItems {
    column: string;
    menu?:any;
}


const CategoryNavbar = () => {
    return (
        <div className='md:flexCenter md:flex-row my-10 gap-2 max-container md:p-2 md:m-4 rounded-3xl '>
            {CATEGORY_NAV.map((category:categoryItems) => (
                <div className='hidden md:flex ' key={`${category.column}`}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className=''>{category.column}</NavigationMenuTrigger>
                                <NavigationMenuContent className='flex flex-col px-2 duration-500'>
                                  {category.menu?.map(({ item, path } : {item:string, key:string, path:string})=> (
                                     <NavigationMenuLink href='/' key={`${category.column}-${item}`} className='whitespace-nowrap my-2 p-4 hover:text-slate-400 hover:border-purple-200 hover:border-b-2 '>{item}</NavigationMenuLink>
                                  ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            ))}
           {/*  <div>
                <Link href="/" className='font-medium text-sm pb-2 border-b-2 border-gray-400 hover:border-red-300 duration-300 whitespace-nowrap'>利用ガイド</Link>
            </div> */}
        </div>
    )
}

export default CategoryNavbar