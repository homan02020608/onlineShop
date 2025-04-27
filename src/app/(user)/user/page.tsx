"use client"
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const UserPage = () => {
  const userState = useSelector((state: RootState) => state.user.user)

  return (
    <div className='flexCenter flex-col gap-10 p-2 m-4 border-y border-gray-200'>
      <h1 className='text-3xl font-bold'>マイページ</h1>
      <div className='flexCenter flex-col text-3xl  min-h-[40vh]'>
        <div>Welcome back {userState?.last_name}</div>
      </div>
    </div>
  )
}

export default UserPage