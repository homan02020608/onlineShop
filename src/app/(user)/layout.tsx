import UserPageSidebar from '@/components/UserPageSidebar'
import React from 'react'

const userLayout = ({ children } : { children : React.ReactNode }) => {
    return (
        <div className='flexBetween w-full p-4'>
            <UserPageSidebar/>
            {children}
        </div>
    )
}

export default userLayout