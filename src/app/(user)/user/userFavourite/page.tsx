import React from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/server';
import BackButton from '@/components/BackButton';
import DeleteItemButton from '@/components/DeleteItemButton';


const page = async () => {
    const user = await currentUser();

    const favouriteProductSnap = await getDocs(collection(db, "user", `${user?.id}`, 'FavouriteItems'))
    const favouriteProducts = favouriteProductSnap.docs.map((doc: any) => ({
        ...doc.data()
    }))

    return (
        <div className='flexCenter flex-col p-2  w-full'>

            <div className='flex flex-row w-full p-6'>
                <BackButton />

            </div>
            <h1 className='text-3xl font-light my-12 '>お気に入り</h1>

            {favouriteProducts.length === 0 ?
                <div className='text-3xl fontlisht flex h-[60vh] '>お気に入り商品なし</div>
                :
                <div className='grid grid-cols-1 md:grid-cols-3 m-2 h-[60vh] overflow-y-scroll'>
                    {favouriteProducts.map((item: any, index) => (
                        <div key={`${item.id}-${index}`} className='flexCenter flex-col m-2 border-2  border-gray-100 shadow-lg rounded-xl md:m-6 bg-white'>
                            <div className='flex justify-self-start w-full p-2 m-2 end-0  '>
                                <DeleteItemButton
                                    userId={user?.id}
                                    productId={item.id}
                                />
                            </div>
                            <Image src={`/${item.imageUrl}`} height={300} width={300} style={{ height: "auto" }} alt='carouselImage01' className='rounded-xl bg-red-400' />
                            <Link href={`/product/${item.productId}`} className='font-semibold flex p-2 px-4 md:px-12 m-2 border-2  rounded-full hover:bg-gray-100 whitespace-nowrap'>商品一覧</Link>

                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default page