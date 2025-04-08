import OrderSummary from '@/components/OrderSummary'
import ShoppingCartList from '@/components/ShoppingCartList'
import React from 'react'


const shoppingCartPage = () => {
  
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