import { Timestamp, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../firebase/firebase'
import Link from 'next/link'


interface userOrder {
  orderId?: string
  created_At?: Timestamp
  address? : string
  id?: string
}

const page = async () => {
  //R0WUzpV9X7wtVVJncTlK
  const userOrderSnapshot = await getDocs(collection(db, "user", "userInfo", "orderHistory"))
  const userOrders = userOrderSnapshot.docs.map((doc) => ({
    ...doc.data(), id: doc.id
  }))
  console.log(userOrders)
  return (
    <div className='bg-blue-200 flex flex-col w-full h-[50vh] gap-20'>
      <h1>Your Order</h1>
      <div>
        <div className='flex flex-col bg-white p-2 m-4 border border-gray-400 gap-4'>
          {userOrders.map((order : userOrder) => (
            <Link href={`userOrder/orderDetails/${order.orderId}`} key={order.orderId} className='flex p-2 m-2 border border-red-100 bg-gray-300 hover:bg-gray-200 rounded-xl'>注文番号:{order.orderId}</Link>
        ))}
        </div>
      </div>
    </div>
  )
}

export default page