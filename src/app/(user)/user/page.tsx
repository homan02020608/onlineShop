"use client"
import { RootState } from '@/redux/store'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const UserPage = () => {
  const userState = useSelector((state: RootState) => state.user.user)

  return (
    <div className='flexCenter flex-col gap-10 p-2 m-4 border border-gray-200'>
      <h1 className='flexCenter'>My Page</h1>
      <div className='flexCenter text-3xl  min-h-[40vh]'>
        <div>{userState?.last_name}のアカウントトップ</div>
        <div>{userState?.last_name}のアカウントトップ</div>
      </div>
    </div>
  )
}

export default UserPage