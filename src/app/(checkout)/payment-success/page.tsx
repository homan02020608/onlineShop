import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';

const PaymentSuccessPage = async () => {
  //{ searchParams : {amount} }: { searchParams: {amount : number}}
  //{ searchParams : {payment_intent} }: { searchParams: {payment_intent : string}}
  
  return (
    <div className='flexCenter flex-col  h-[50vh] gap-4'>
      <div><CheckCircleIcon fontSize='large'/></div>
      <h1 className='text-3xl font-semibold'>Payment Successfull!</h1>
      <p>Your payment has been received</p>
      <Link href="/" className='px-24 py-2 border border-black bg-white hover:bg-black/20  text-black rounded-xl font-medium '>ホーム</Link>
    </div>
  )
}

export default PaymentSuccessPage