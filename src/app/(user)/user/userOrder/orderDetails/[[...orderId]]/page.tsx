import { collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../../../firebase/firebase'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { currentUser } from '@clerk/nextjs/server'



interface orderDetails {
  id: string
  order?: any
  payment: string
  create_At: string
  update_At: string
}

interface itemDetails {
  productId: string
  quantity: number
  price: number
  title: string
}


const page = async ({ params }: { params: Promise<{ orderId: string }> }) => {
  const user = await currentUser();
  const orderIdParmas = (await params).orderId
  const q = query(collection(db, "user", `${user?.id}`, "orderHistory"), where("id", "==", `${orderIdParmas}`))
  const querySnapShot = await getDocs(q);
  const orderDetails = querySnapShot.docs.map((doc: any) => ({
    ...doc.data(), id: doc.id

  }))

  return (
    <div className='flex flex-col w-full border border-gray-200 p-2 m-2'>
      <h1>注文詳細</h1>
      <Table className=''>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">商品ID</TableHead>
            <TableHead >値段</TableHead>
            <TableHead >件数</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        {orderDetails.map((orderDetail: orderDetails) => (
          <TableBody key={orderDetail.id}>
            {orderDetail.order.map((itemsDetail: itemDetails) => (
              <TableRow key={itemsDetail.productId} className=' '>
                <TableCell className="font-medium text-sm whitespace-pre-wrap ">{itemsDetail.title}</TableCell>
                <TableCell>{itemsDetail.price}</TableCell>
                <TableCell>{itemsDetail.quantity}</TableCell>
                <TableCell className="text-right">￥{itemsDetail.price * itemsDetail.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        ))}

      </Table>
    </div>
  )
}

export default page