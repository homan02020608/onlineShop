import Link from 'next/link'
import React from 'react'

const sidebarInfo = [
    { column: "会員情報照会、変更" ,path:"/user/userPage/TestingUser"},
    { column: "お届け先の確認、登録、変更",path:"/user/userOrder"},
    { column: "注文履歴一覧" ,path:"/user/userOrder"},
    { column: "出荷記録" ,path:"/user/userOrder"},
    { column: "クーポン一覧" ,path:"/user/userOrder"},
    { column: "お気に入り" ,path:"/user/userFavourite"},
]

const UserPageSidebar = () => {
    return (
        <div className='flex flex-col bg-white/50 rounded-xl  '>
                <h1 className='text-md p-2 m-2  whitespace-nowrap'>My Page</h1>
                {sidebarInfo.map((info,i) => (
                    <Link href={info.path} className='flex text-sm md:text-md min-w-[100px] max-w-[300px] text-blue-600 p-2 m-2 rounded-md hover:bg-gray-100 hover:cursor-pointer hover:font-semibold hover:underline'key={`column-${i}`}>{info.column}</Link>
                ))}
        </div>
    )
}

export default UserPageSidebar