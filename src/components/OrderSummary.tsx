"use client"
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { purchaseCart } from './PurchaseButton'
import { useRouter } from 'next/navigation'

const OrderSummary = () => {
    const amount = useSelector((state: RootState) => state.cart.amount);
    const shoppingCart = useSelector((state: RootState) => state.cart.cart);
    const router = useRouter();

    const handleCheck = async () => {
        const result = await purchaseCart(shoppingCart);

        if (result.success) {
            router.push("/checkout")
        }else{
            alert("購入失敗"+result.message)
        }
    }

    return (
        <div >
            <div className='flex flex-col p-2  whitespace-nowrap w-full md:w-[400px] '>
                <div className='border border-gray-400 mx-4'>
                    <h1 className='font-medium text-xl m-2 '>Order Summary</h1>
                    <div className='flex-col p-4  *:flexBetween w-full'>
                        <div className='gap-x-10'>
                            <div>Total:</div>
                            <div>￥{amount}</div>
                        </div>
                        <div className='gap-x-10'>
                            <div>Shipping:</div>
                            <div>{amount >= 5000 ? "無料" : "￥660"}</div>
                        </div>
                        {/*                     <div className='gap-x-10 border-t-2 border-gray-200 mt-4'>
                        <div>Point:</div>
                        <div>350</div>
                    </div> */}
                        <div className='gap-x-10'>
                            <div>Coupon:</div>
                            <div>なし</div>
                        </div>

                        <div>
                            <button className={`flexCenter bg-black/80 text-white rounded-none w-full px-2 my-4 hover:bg-black/60 ${amount === 0 && "pointer-events-none"}`} onClick={handleCheck}> CheckOut </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary