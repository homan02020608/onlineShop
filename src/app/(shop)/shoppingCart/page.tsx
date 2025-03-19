import OrderSummary from '@/components/OrderSummary'
import ShoppingCartList from '@/components/ShoppingCartList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../firebase/firebase'

const shoppingCartPage = async () => {
/*   const userSnapShot = await getDocs(query(collection(db,'user'), where("userId", "==" , "testing01")))
  const userInfo = userSnapShot.docs.map((doc : any) => ({
    ...doc.data()
  }))
  console.log(userInfo) */
  
  return (
    <div className='flex flex-col '>
      <div className='flexCenter '>
        <h1 className='font-semibold text-xl'>Shopping Cart </h1>
      </div>
      <div className='flex justify-center flex-col md:flex-row '>
        <ShoppingCartList />
        
        <OrderSummary />  
      </div>
    </div>
  )
}

export default shoppingCartPage