import { collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../../firebase/firebase'

const page = async() => {

  const q = query(collection(db,"products"),where("category", ">=", "ph") , where("category", "<=" , "phot"+ "\uf8ff" ))
  const searchSnapShot = await getDocs(q);
  const searchItems = searchSnapShot.docs.map((doc) => ({ ...doc.data() }));
  console.log(searchItems);

  return (
    <div>News Detail Page</div>
  )
}

export default page