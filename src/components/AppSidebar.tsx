import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from 'next/link'


  const sidebarInfo = [
    { column: "会員情報照会、変更" ,path:"/user/userPage/userOrder"},
    { column: "お届け先の確認、登録、変更",path:"/user/userOrder"},
    { column: "注文履歴" ,path:"/user/userOrder"},
    { column: "お気に入り" ,path:"/user/userFavourite"},
]

const AppSidebar = () => {
    
    return (
        <Sidebar collapsible='offcanvas' className='' variant='floating' >
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>マイページ</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarInfo.map((item) => (
                                <SidebarMenuItem key={item.column} className='m-4'>
                                    <SidebarMenuButton className='py-8'>
                                        <Link href={item.path}>{item.column}</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar