"use client"
import React, { useState } from 'react'
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
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Timestamp, doc, updateDoc } from 'firebase/firestore';

import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { increase } from '@/redux/cartSlice';
import { db } from '../../firebase/firebase';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';




interface ProductInfoProps {
    title: string
    productId: string
    category: string
    imageUrl: string
    price: number
    bookmarked: boolean
    id: string
    update_At?: Timestamp
    create_At?: Timestamp
    stock: number
}

const ProductCard = ({ title, productId, price, bookmarked, imageUrl, id }: ProductInfoProps) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState<number>(0);
    const [bookmark, setBookmark] = useState<boolean>(bookmarked)
    const updateBookmarkItem = async () => {
        await updateDoc(doc(db, "products", `${id}`), {
            bookmark: !bookmark
        })
        console.log("success")
    }
    const updateBookmark = () => {
        updateBookmarkItem()
        setBookmark(!bookmark)

    }

    return (
        <div className='flexCenter md:flex-row gap-2 flex-col lg:gap-20 '>
            <div className='flex '>
                <Image src={`/${imageUrl}`} height={400} width={400} style={{ width: "auto", height: "auto" }} alt='carouselImage02' />
            </div>

            <div className='flex justify-center m-6 w-auto min-h-[65vh] whitespace-normal '>
                <Card key={title} className='flex flex-col p-2 pb-10 w-auto h-full border-0 md:text-base text-lg shadow-none '>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>{[1, 2, 3, 4, 5].map((star) => (<StarRateIcon key={`star-${star}`} className='size-6 md:size-12 text-black/30' />))}</div>
                    </CardContent>
                    <CardContent>
                        <p><span className='font-semibold'>商品番号:</span> {productId}</p>
                    </CardContent>
                    <CardContent>￥{price}(税込)</CardContent>
                    <CardContent onClick={() => updateBookmark()}>
                        <div>{bookmark ? <FavoriteIcon /> : <FavoriteBorderIcon />}<span>お気に入り</span></div>
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
                        {/* <button className='w-full m-2 p-4 bg-sky-200 rounded-full hover:bg-sky-100' onClick={() => dispatch(addtoCart({title, productId ,quantity}))}>カートに入れる</button> */}
                        <button className='w-full m-2 p-4 bg-sky-200 rounded-full hover:bg-sky-100' onClick={() => dispatch(increase({ id, title, productId, quantity, price }))}>カートに入れる</button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default ProductCard