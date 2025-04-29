"use client"
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Timestamp, collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';

import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { increase } from '@/redux/cartSlice';
import { db } from '../../firebase/firebase';
import { SelectGroup } from '@radix-ui/react-select';
import { SignInButton, useUser } from '@clerk/nextjs';
import { saveRecentViewedItems } from './RecentViewedItemList';
import BackButton from './BackButton';
import Link from 'next/link';




interface ProductInfoProps {
    title: string
    productId: string
    category: string
    imageUrl: string
    price: number
    id: string
    update_At?: Timestamp
    create_At?: Timestamp
    stock: number
}

const ProductCard = ({ title, productId, price, imageUrl, id ,category }: ProductInfoProps) => {
    const dispatch = useDispatch()
    const { isSignedIn, user } = useUser();
    const [quantity, setQuantity] = useState<number>(1);
    const updateBookmarkItem = async () => {
        const bookmarkQuery = query(collection(db, 'user', `${user?.id}`, 'FavoriteItems'), where('id', '==', `${id}`))
        const bookmarkItem = await getDocs(bookmarkQuery)
        /* データベースに気に入り商品追加 */
         if (bookmarkItem.docs.length === 0) {
            await setDoc(doc(db, "user", `${user?.id}`, "FavouriteItems", `${id}`), {
                title: title,
                productId: productId,
                price: price,
                imageUrl: imageUrl,
                id: id,
                bookmark: true,
                create_At: new Date(),
                update_At: new Date(),
            })

        } 

        console.log("success")

    }
    const updateBookmark = () => {
        updateBookmarkItem()

    }

    useEffect(() => {
        saveRecentViewedItems({
            productId: productId,
            title: title,
            imageUrl: imageUrl,
        })
    }, [])

    return (
        <div className='flexCenter md:flex-row gap-2 flex-col lg:gap-20 '>
            <div className='flex flex-col p-4 gap-4'>
                <BackButton />
                <Image src={`/${imageUrl}`} height={400} width={400} style={{ width: "auto", height: "auto" }} alt='carouselImage02' />
            </div>
            <div className='flex justify-center m-6 w-auto min-h-[65vh] whitespace-normal '>
                <Card key={title} className='flex flex-col p-2 pb-10 w-auto h-full border-0 md:text-base text-lg shadow-none '>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription><Link href={`/categoryList/category/${category}`} className='hover:underline'>#{category}</Link></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>{[1, 2, 3, 4, 5].map((star , index) => (<StarRateIcon key={`star-${star}`} className={`size-6 md:size-8 ${(index !== 4) ? 'text-yellow-300' : 'text-slate-200'} `} />))}</div>
                    </CardContent>
                    <CardContent>
                        <p><span className='font-semibold'>商品番号:</span> {productId}</p>
                    </CardContent>
                    <CardContent>￥{price}(税込)</CardContent>
                    <CardContent>
                        {isSignedIn ?
                            <div onClick={() => updateBookmark()} className='hover:bg-slate-50 hover:cursor-pointer flex items-center w-[12rem] p-2 rounded-md'>{<FavoriteBorderIcon />}<span>お気に入りに追加</span></div>
                            :
                            <SignInButton mode='modal'><div > <FavoriteBorderIcon /><span>お気に入りに追加</span></div></SignInButton>
                        }
                    </CardContent>
                    <CardContent>
                        <Select onValueChange={(value) => setQuantity(Number(value))}>
                            <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((selected) => (
                                        <SelectItem value={String(selected)} key={`selected-${selected}`} >{selected}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </CardContent>
                    <CardFooter className='mt-10'>
                        {isSignedIn ?
                            <button className='w-full m-2 p-4 bg-sky-200 rounded-full hover:bg-sky-100 hover:scale-105 hover:transition-transform' onClick={() => dispatch(increase({ id, title, productId, quantity, price, imageUrl }))}>カートに入れる</button>
                            :
                            <SignInButton mode='modal'><button className='w-full m-2 p-4 bg-sky-200 rounded-full hover:bg-sky-100' >カートに入れる</button></SignInButton>
                        }
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default ProductCard