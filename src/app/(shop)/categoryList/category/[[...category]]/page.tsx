import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react'
import { db } from '../../../../../../firebase/firebase';
import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/BackButton';

interface categoryItem {
  id: string;
  productId?: string
  imageUrl?: string
  category?: string
  title?: string
}

const page = async ({ params }: { params: Promise<{ category: string }> }) => {

  const categoryParams = (await params).category;

  const categoryQuery = await getDocs(query(collection(db, "products"), where('category', '==', `${categoryParams}`)))

  const categorySnapShot = categoryQuery.docs.map((doc) => ({
    ...doc.data(), id: doc.id
  }))

  return (
    <div className='p-4'>
      <BackButton />
      <div className='grid grid-cols-2 md:grid-cols-3'>
        {categorySnapShot.map((item: categoryItem) => (
          <Link href={`/product/${item.productId}`} key={item.id} className='flexCenter flex-col m-2 pb-4 border-2 border-gray-00 rounded-xl md:m-6 bg-white hover:shadow-xl hover:scale-105 transition-transform'>
            <Image src={`/${item.imageUrl}`} height={400} width={400} sizes='80vh' style={{ width: "100%", height: "auto" }} alt='carouselImage01' className='rounded-xl ' />
            <p className='left-0 w-full text-sm font-semibold mt-4 pl-2 pointer-events-none'>#{item.category}</p>
            <div className='pointer-events-none text-sm '>{item.title}</div>
            {/* <Link href={`/product/${item.productId}`} className='font-semibold p-2 px-14 m-2 border-2  rounded-full hover:bg-gray-100 whitespace-nowrap'>商品一覧</Link> */}
          </Link>
        ))}
      </div>
    </div>

  )
}

export default page