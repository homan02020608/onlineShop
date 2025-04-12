import UserPageSidebar from '@/components/UserPageSidebar'
import React from 'react'

const userLayout = ({ children } : { children : React.ReactNode }) => {
    return (
        <div className='flex justify-center p-4 md:gap-10 lg:gap-40'>
            <UserPageSidebar/>
            {children}
        </div>
    )
}

export default userLayout