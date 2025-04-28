"use client"
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const UserPage = () => {
  const userState = useSelector((state: RootState) => state.user.user)

  return (
    <div className='flexCenter flex-col gap-10 p-2 m-4 border-y h-[80vh] border-gray-200'>
      <h1 className='text-3xl font-light'>マイページ</h1>
      <div className='flexCenter flex-col text-xl font-light  min-h-[40vh]'>
        <div>Welcome back <span >{userState?.last_name}</span> </div>
      </div>
    </div>
  )
}

export default UserPage