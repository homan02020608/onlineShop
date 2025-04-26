import ProductCard from '@/components/ProductCard'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../firebase/firebase'


const page = async ({ params } : { params : Promise<{product : string}> }) => {
    const productIdParams = (await params).product
    const q = query(collection(db, "products"), where("productId", "==", `${productIdParams}`))
    const querySnapShot = await getDocs(q);
    const product = querySnapShot.docs.map((doc: any) => ({
        ...doc.data(), id:doc.id 

    }))
    //console.log(product)

    return (
        <div className='flexCenter m-4'>
            <div className='flexCenter bg-white/50 '>     
                    {/* <ProductCard productParams={String(productParams)}/> */}
                    {product.map((info) => (
                        <ProductCard 
                            key={info.productId}
                            title={info.title}
                            productId={info.productId}
                            category={info.category}
                            imageUrl={info.imageUrl}
                            price={info.price}
                            bookmarked={info.bookmark}
                            id={info.id}
                            stock = {info.stock}
                        />
                    ))}
            </div>
     
        </div>
    )
}

export default page