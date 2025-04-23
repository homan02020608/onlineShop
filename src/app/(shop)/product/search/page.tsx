import { collection, doc, getDoc, getDocs, query, runTransaction, where } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../firebase/firebase'
import PurchaseButton from '@/components/PurchaseButton'



/*     const listRef = await getDocs(collection(db,"category"));
    const listSnapShot = listRef.docs.map((doc) => ({
      id:doc.id, ...doc.data()
    }))
    console.log(listSnapShot) */



const page = async () => {

  //const q = await getDoc(doc(db, "testItem", "TDNw7DkeQrlPvQ1CqC6k"))

  return (
    <div>
      <p>search query :</p>
    </div>
  )
}

export default page