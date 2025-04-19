import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../firebase/firebase'

const page = async() => {
    const listRef = await getDocs(collection(db,"category"));
    const listSnapShot = listRef.docs.map((doc) => ({
      id:doc.id, ...doc.data()
    }))
    console.log(listSnapShot)
  return (
    <div>search query : </div>
  )
}

export default page