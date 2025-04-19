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
        <div className='gap-2 max-container md:flexCenter md:flex-row md:p-2 md:rounded-3xl '>
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
           {/*  <div>
                <Link href="/" className='font-medium text-sm pb-2 border-b-2 border-gray-400 hover:border-red-300 duration-300 whitespace-nowrap'>利用ガイド</Link>
            </div> */}
        </div>
    )
}

export default CategoryNavbar