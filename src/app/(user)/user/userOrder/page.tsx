import {  collection,  getDocs, orderBy, query } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../firebase/firebase'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'



interface userOrder {
  orderId?: string
  create_At?: any
  address?: string
  id?: string
}

const page = async () => {
  const user = await currentUser();
  const userOrderSnapshot = await getDocs(query(collection(db, "user", `${user?.id}`, "orderHistory"),orderBy('create_At','desc')))
  const userOrders = userOrderSnapshot.docs.map((doc) => ({
    ...doc.data() 
  }))
 
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='flexCenter test-3xl font-light'>ご注文履歴</h1>
      <div className='h-[100vh] overflow-y-scroll '>
        <div className='flex flex-col  gap-4 min-w-[200px] md:w-[600px]'>
          {userOrders.map((order: userOrder) => (
            <div key={order.id} className='flex flex-col text-sm md:text-base p-4 m-4 border-4 border-gray-100 rounded-xl gap-8 *:flex *:flex-col '>
              <div className=''>注文番号:<span>{order.id}</span>
              </div>
               <div>注文日時:<span>{order.create_At?.toDate().toLocaleDateString("ja-JP")}</span></div> 
              <Link href={`/user/userOrder/orderDetails/${order.id}`} className='flexCenter border border-gray-200  p-2 hover:bg-gray-100 rounded-full hover:scale-105 transition-transform'>注文詳細</Link>
            </div>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default page