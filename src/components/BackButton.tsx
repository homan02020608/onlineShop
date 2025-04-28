"use client"
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter()
  return (
    <button onClick={() => {router.back()}} className='left-0 flex w-full hover:underline'>
        <ArrowBackIosNewIcon/>
        back
    </button>
  )
}

export default BackButton