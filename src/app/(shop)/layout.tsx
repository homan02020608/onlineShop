import CategoryNavbar from '@/components/CategoryNavbar'
import React from 'react'

const Shoplayout = ( {children } : {children : React.ReactNode} ) => {
  return (
    <div>
        <CategoryNavbar />
        {children}
    </div>
  )
}

export default Shoplayout