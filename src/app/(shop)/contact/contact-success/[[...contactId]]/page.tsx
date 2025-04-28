import Link from 'next/link'
import React from 'react'

const contactSuccessPage = async ({ params }: { params: Promise<{ contactId: string }> }) => {
    const contactIdParams = (await params).contactId
    return (
        <div className='flexCenter flex-col gap-2 font-medium text-sm md:text-lg *:p-4'>
            <h1 className='font-light text-lg md:text-3xl mt-6 '>[お問い合わせ番号 : {contactIdParams}]</h1>
            <p>お問い合わせありがとうございます。</p>
            <p>ご入力いただいた内容は正常に送信されました。</p>

            <p>確認後、担当者よりご連絡差し上げますので、今しばらくお待ちください。</p>
            <p className='font-light text-sm text-red-600'>※内容によってはご返信に数日いただく場合がございます。何卒ご了承ください。</p>
            <Link href={"/"} className='border-2 rounded-3xl hover:scale-105 hover:transition-transform'>ホームページへ</Link>
        </div>
    )
}

export default contactSuccessPage