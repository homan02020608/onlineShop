"use client"
import { RootState } from '@/redux/store'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const UserPage = () => {
  const userState = useSelector((state: RootState) => state.user.user)

  return (
    <div className='flexCenter flex-col w-full'>
      <div className='flexCenter text-3xl w-full'>
        <div>{userState?.last_name}のアカウントトップ</div>
      </div>
    </div>
  )
}

export default UserPage