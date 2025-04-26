import { Timestamp, collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../firebase/firebase'
import Link from 'next/link';
import PurchaseButton from '@/components/PurchaseButton';

interface newsInfo {
  Id: string;
  title?: string;
  new_url? : string;
  create_At? : any;
  update_At?: Timestamp;
}

const page = async() => {

  const newsSnapShot = await getDocs(collection(db, "news"));
  const news = newsSnapShot.docs.map((doc) => ({
    ...doc.data() , Id: doc.id
  }))
  
  return (
    <div className='bg-red-100 flexCenter flex-col gap-6 '>
      <h1 className='text-3xl'>NEWS</h1>
      <div className='bg-slate-100 flexCenter flex-col p-2 m-2 gap-4'>
        {news.map((info : newsInfo) => (
          <Link href={`/news/newsDetails/${info.title}`} key={info.Id} className='gap-2'>
            <span>{new Date(info.create_At.seconds * 1000).toLocaleDateString('ja-JP')}</span>
            <div>{info.title}</div>
          </Link>
        ))}
      </div>
      <PurchaseButton />
    </div>
  )
}

export default page