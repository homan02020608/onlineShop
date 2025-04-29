"use client"
import { RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { purchaseCartCheck } from './PurchaseButton'
import { useRouter } from 'next/navigation'
import { addShipping } from '@/redux/cartSlice'

const OrderSummary = () => {
    const amount = useSelector((state: RootState) => state.cart.amount);
    const shoppingCart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch()
    const router = useRouter();

    /* checkout page の前に一回在庫チェックを行う、不足の場合はalert */
    const handleCheck = async () => {
        const result = await purchaseCartCheck(shoppingCart);

        if (result.success) {
            dispatch(addShipping())
            router.push("/checkout")
        } else {
            alert("購入失敗" + result.message)
        }
    }

    return (
        <div>
            {
                shoppingCart.length > 0 &&
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
            }
        </div>
    )
}

export default OrderSummary