"use client"
import { doc, runTransaction } from 'firebase/firestore';
import React from 'react'
import { db } from '../../firebase/firebase';

export async function purchaseCart(testCart: { id: string, quantity: number }[]) {
    try {
        await runTransaction(db, async (transaction) => {
            const productRefs = testCart.map((item: any) => ({
                ref: doc(db, "testItem", item.id),
                quantity: item.quantity
            }))
            console.log("ProductRefs")

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
                    throw new Error(`在庫不足-${docSnap.data().productId}`)
                }
            }

            for (let i = 0; i < productDocs.length; i++) {
                const docSnap = productDocs[i];
                const ref = productRefs[i].ref;
                const quantity = productRefs[i].quantity;
                const currentStock = docSnap.data().stock;

                transaction.update(ref, { stock: currentStock - quantity });
            }

        });

        return { success: true }

    } catch (error) {
        alert(error)
        return { success: false, message: (error as Error).message };
        
    }
} 

const testCart = [
    { id: "6P4jkQckzH5Ci0epwV8V", quantity: 1 },
    { id: "eFEyuJaMiAgwpPMm2XwN", quantity: 1 },
    { id: "TDNw7DkeQrlPvQ1CqC6k", quantity: 2 },
]

const PurchaseButton = () => {

    const Purchase = () => {
        purchaseCart(testCart)
    }
    return (
        <button onClick={Purchase} className='p-2 border border-black rounded-xl'>Purchase</button>
    )
}

export default PurchaseButton