import { collection, getDocs } from 'firebase/firestore';
import React from 'react'
import { db } from '../../../../../firebase/firebase';
import Link from 'next/link';
import Image from 'next/image';

interface categoryItem {
    id: string;
    productId?: string
}


const categoryPage = async ({ params }: { params: Promise<{ category: string }> }) => {

    const categoryParams = (await params).category

    const querySnapShot = await getDocs(collection(db, "category", "categoryList", `${categoryParams}`));
    const categoryItems = querySnapShot.docs.map((doc) => ({
        ...doc.data(), id: doc.id
    }))

    //console.log(categoryItems)
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 '>
            {categoryItems.map((item: categoryItem) => (
                <div key={item.id} className='flexCenter flex-col  m-2   border-2 border-gray-100 shadow-lg rounded-xl md:m-6 bg-white'>
                        <Image src="/carouselImage01.jpeg" height={500} width={500} sizes='100vh' style={{ width: "100%", height: "auto" }} alt='carouselImage01' className='rounded-xl' />
                        <Link href={`/product/${item.productId}`} className='font-semibold  p-2 px-14 m-2 border-2  rounded-full hover:bg-gray-100 whitespace-nowrap'>商品一覧</Link>
                </div>
            ))}
        </div>
    )
}

export default categoryPage