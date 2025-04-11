import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
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
  const orderIdParmas = (await params).orderId
  const q = query(collection(db, "user", "user_2sySUESJKtYHIaBQV9E4As0F5bV", "orderHistory"), where("id", "==", `${orderIdParmas}`))
  const querySnapShot = await getDocs(q);
  const orderDetails = querySnapShot.docs.map((doc: any) => ({
    ...doc.data(), id: doc.id

  }))
/*   const docRef = doc(db, "user", "user_2sySUESJKtYHIaBQV9E4As0F5bV", "orderHistory", `${orderIdParmas}`)
  const docSnap = await getDoc(docRef);
  const detailData1 = [docSnap.data()]
   */
  console.log(orderDetails)
  return (
    <div className='flex flex-col w-full border border-gray-200 p-2 m-2'>
      <h1>注文詳細</h1>
      <Table className=''>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">商品ID</TableHead>
            <TableHead className="">値段</TableHead>
            <TableHead className="">件数</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        {orderDetails.map((detail: orderDetail) => (
          <TableBody key={detail.id}>
            {detail.order.map((itemsDetail: itemDetails) => (
              <TableRow key={itemsDetail.productId} className='whitespace-nowrap'>
                <TableCell className="font-medium">{itemsDetail.productId}</TableCell>
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