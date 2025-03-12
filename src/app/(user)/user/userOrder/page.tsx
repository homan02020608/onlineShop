import {  Timestamp, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../firebase/firebase'
import Link from 'next/link'



interface userOrder {
  orderId?: string
  created_At?: any
  address?: string
  id?: string
}

const page = async () => {
  //R0WUzpV9X7wtVVJncTlK
  const userOrderSnapshot = await getDocs(collection(db, "user", "userInfo", "orderHistory"))
  const userOrders = userOrderSnapshot.docs.map((doc) => ({
    ...doc.data(), id: doc.id 
  }))
  //console.log(userOrders)
  return (
    <div className='flex flex-col gap-10  p-2 h-[50vh] '>
      <h1 className='flexCenter'>Your Order</h1>
      <div>
        <div className='flex flex-col  border border-gray-100 p-2 m-4 gap-4 min-w-[300px] md:w-[500px]'>
          {userOrders.map((order: userOrder) => (
            <div key={order.orderId} className='flex flex-col  text-sm md:text-base p-4 m-4 border-y border-gray-300 gap-8 *:flex *:flex-col '>
              <div className=''>注文番号:<span>{order.orderId}</span>
              </div>
              <div>注文日時:<span>{order.created_At.toDate().toLocaleString()}</span></div>
              <Link href={`/user/userOrder/orderDetails/${order.orderId}`} className='flexCenter border border-gray-200  p-2 hover:bg-gray-100 rounded-full'>注文詳細</Link>
            </div>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default page