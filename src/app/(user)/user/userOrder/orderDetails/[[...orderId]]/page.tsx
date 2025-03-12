import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../../../firebase/firebase'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface orderDetail {
  productId?: string
  quantity?: number
  id?: string
}

const page = async ({ params }: { params: Promise<{ orderId: string }> }) => {
  const orderIdParmas = (await params).orderId
  const orderDetailSnapshot = await getDocs(collection(db, "user", "userInfo", "orderHistory", `${orderIdParmas}`, "order_details"))
  const orderDetails = orderDetailSnapshot.docs.map((doc) => ({
    ...doc.data(), id: doc.id
  }))
  //console.log(orderDetails)
  return (
    <div className='flex flex-col w-full border border-gray-200 p-2 m-2'>
      <h1>注文詳細</h1>
      <Table className=''>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">商品ID</TableHead>
            <TableHead className="">商品番号</TableHead>
            <TableHead className="">値段</TableHead>
            <TableHead className="">件数</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderDetails.map((detail: orderDetail) => (
            <TableRow key={detail.id} className='whitespace-nowrap'>
              <TableCell className="font-medium">{detail.id}</TableCell>
              <TableCell>{detail.productId}</TableCell>
              <TableCell>3000円</TableCell>
              <TableCell>{detail.quantity}</TableCell>
              <TableCell className="text-right">￥6000.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default page