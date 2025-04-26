"use client"
import { doc, runTransaction } from 'firebase/firestore';
import React from 'react'
import { db } from '../../firebase/firebase';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export async function purchaseCart(shoppingCart: { id: string, quantity: number }[]) {
    try {
        await runTransaction(db, async (transaction) => {
            const productRefs = shoppingCart.map((item: any) => ({
                ref: doc(db, "products", item.id),
                quantity: item.quantity
            }))
           

            const productDocs = await Promise.all(
                productRefs.map((item) => transaction.get(item.ref))
            );

            

            for (let i = 0; i < productDocs.length; i++) {
                const docSnap = productDocs[i];
                const quantity = productRefs[i].quantity

                if (!docSnap.exists()) {
                    throw new Error(`商品が存在しません (${productRefs[i].ref.id})`)
                }

                const stock = docSnap.data().stock;

                if (stock < quantity) {
                    throw new Error(`在庫不足:${docSnap.data().title} もう一度お試しください`)
                }
            }

            for (let i = 0; i < productDocs.length; i++) {
                const docSnap = productDocs[i].data();
                const ref = productRefs[i].ref;
                const quantity = productRefs[i].quantity;
                const currentStock = docSnap?.stock;

                transaction.update(ref, { stock: currentStock - quantity });
            }

        });

        return { success: true }

    } catch (error) {
        //alert(error)
        return { success: false, message: (error as Error).message };
        
    }
} 



const PurchaseButton = () => {

    const shoppingCart = useSelector((state : RootState) => state.cart.cart)
    
    const Purchase = () => {
        purchaseCart(shoppingCart)
    }
    return (
        <button onClick={Purchase} className='p-2 border border-black rounded-xl hover:bg-slate-200'>Purchase</button>
    )
}

export default PurchaseButton