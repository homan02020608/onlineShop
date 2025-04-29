import AppSidebar from '@/components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { cookies } from 'next/headers'
import React from 'react'

const userLayout = async({ children }: { children: React.ReactNode }) => {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
   
    return (
        <SidebarProvider
        defaultOpen={defaultOpen}
        >
            <AppSidebar />
            <SidebarTrigger size={"icon"} className='size-20'/>
            <div className='w-full flexCenter  p-2 md:gap-10 lg:gap-40 '>
                {/* <UserPageSidebar /> */}
                {children}
            </div>
        </SidebarProvider>
    )
}

export default userLayout