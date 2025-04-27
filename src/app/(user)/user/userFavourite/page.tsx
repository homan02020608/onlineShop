import React from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/server';


const page = async () => {
    const user = await currentUser();

    const favouriteProductSnap = await getDocs(collection(db,"user",`${user?.id}`,'FavoriteItems'))
    const favouriteProducts = favouriteProductSnap.docs.map((doc: any) => ({
        ...doc.data()
    }))


    return (
        <div className='flexCenter flex-col  p-2 gap-10'>
            <h1 className=''>お気に入り</h1>
            <div className='grid grid-cols-2 md:grid-cols-3'>
                {favouriteProducts.map((item: any , index) => (
                    <div key={`${item.id}-${index}`} className='flexCenter flex-col  m-2   border-2 border-gray-100 shadow-lg rounded-xl md:m-6 bg-white'>
                        <Image src={`/${item.imageUrl}`} height={300} width={300} style={{ height: "auto" }} alt='carouselImage01' className='rounded-xl bg-red-400' />
                        <Link href={`/product/${item.productId}`} className='font-semibold  p-2 px-14 m-2 border-2  rounded-full hover:bg-gray-100 whitespace-nowrap'>商品一覧</Link>
                    </div>
                ))}
            </div>

            


        </div>
    )
}

export default page