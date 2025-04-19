import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter flex-col bottom-0 border-t-2 w-full mt-auto text-black  bg-transparent pb-8'>
      <div className='flex p-2 m-4 gap-20 text-sm'>
        {/*  */}
        <ul className='*:p-4'>
          <li className='hover:underline hover:cursor-pointer'>よくある質問</li>
          <li className='hover:underline hover:cursor-pointer'>問い合わせ</li>
          <li className='hover:underline hover:cursor-pointer'>ご利用ガイド</li>
        </ul>
        {/* Contact us */}
        <ul className='*:p-4'>
          <li className='hover:underline hover:cursor-pointer'>よくある質問 </li>
          <li className='hover:underline hover:cursor-pointer'>問い合わせ</li>

        </ul>

      </div>

      <div>©HO-ONLINESHOP</div>
    </footer>
  )
}

export default Footer