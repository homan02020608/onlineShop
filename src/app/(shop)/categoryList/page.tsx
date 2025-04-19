import React from 'react'
import { CATEGORYLIST } from '../../../../constants'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {

  return (
    <div>
      <h1 className='text-3xl font-semibold flexCenter p-2 m-4'>商品カテゴリ</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 m-4 gap-10'>
        {CATEGORYLIST.map((item) => (
          <div key={item.key} className='flexCenter flex-col m-2 p-4 gap-y-4 border-2 border-gray-100 shadow-lg rounded-lg'>
              <h1 className='font-bold mb-2'>{item.title}</h1>
              <Image src={item.img} width={300} height={300}  alt={item.key} className='rounded-md'/>
              <Link href={`/categoryList/category/${item.path}`} className='w-full flexCenter p-2 m-4 border border-gray-200 rounded-xl font-bold text-lg bg-white hover:bg-gray-100 '>商品一覧</Link>
             
          </div>
        ))}
      </div>
    </div>
  )
}

export default page