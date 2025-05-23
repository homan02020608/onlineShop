import React from 'react'

interface LayoutProps {
    children : React.ReactNode;
}

const layout = ( {children} : LayoutProps ) => {
  return (
    <div className='flex items-center justify-center min-h-screen '>
        {children}
    </div>
  )
}

export default layout