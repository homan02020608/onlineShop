import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../../../firebase/firebase'

interface orderDetail {
  productId?:string
  quantity?:number
  id?:string
}

const page = async ({ params } : { params : Promise<{orderId : string}> }) => {
  const orderIdParmas =  (await params).orderId
  const orderDetailSnapshot = await getDocs(collection(db, "user", "userInfo", "orderHistory",`${orderIdParmas}`,"order_details"))
  const orderDetails = orderDetailSnapshot.docs.map((doc) => ({
    ...doc.data(), id: doc.id
  }))
  console.log(orderDetails)
  return (
    <div className='flex flex-col w-full border border-gray-200 p-2'>
      <h1>注文詳細</h1>
      <div >
        {orderDetails.map((detail : orderDetail) => (
          <div key={detail.id} className='flex p-2 gap-4 border-y border-gray-200 hover:bg-gray-100'>
            <div>商品ID:{detail.id}</div>
            <div>商品番号:{detail.productId}</div>
            <div>件数: {detail.quantity}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page