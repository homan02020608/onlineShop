import UserPageSidebar from '@/components/UserPageSidebar'
import React from 'react'

const userLayout = ({ children } : { children : React.ReactNode }) => {
    return (
        <div className='flexCenter w-full p-4  md:gap-10'>
            <UserPageSidebar/>
            {children}
        </div>
    )
}

export default userLayout