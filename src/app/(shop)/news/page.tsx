import React from 'react'
import News from '@/components/News';


const page = async () => {

  return (
    <div 
      className='flexCenter flex-col gap-4 ' 
    >
      <h1 className='text-3xl'>ニュース</h1>
      <News />
    </div>
  )
}

export default page