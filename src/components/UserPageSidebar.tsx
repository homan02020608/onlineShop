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
        <div className='flex flex-col bg-white/50 rounded-xl p-2'>
                <h1 className='text-3xl  p-2 m-2'>My Page</h1>
                {sidebarInfo.map((info,i) => (
                    <Link href={info.path} className='bg-gray-100 text-blue-600 p-4 m-2 rounded-md hover:bg-gray-200 hover:cursor-pointer hover:font-semibold'key={`column-${i}`}>{info.column}</Link>
                ))}
        </div>
    )
}

export default UserPageSidebar