"use client"
import React, { useRef } from 'react'


const ContactForm = () => {

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            name : nameRef.current?.value,
            email : emailRef.current?.value,
            message : messageRef.current?.value,
        }
        //console.log(data)
        await fetch("api/contactEmail", {
            method: "POST",
            headers : {
                Accept: "application/json , test/plain",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data : data})
        }).then((res) => {
            if(res.status === 200) console.log("メール送信成功!!");
        })
    };

    return (
        <form className='flexCenter flex-col gap-10 p-6 m-8 bg-slate-100' onSubmit={(e:React.FormEvent<HTMLFormElement>) => submitForm(e)} >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <label className="w-32 text-sm font-medium">名前</label>
                <input
                    type="text"
                    id="name"
                    ref={nameRef}
                    //{...register("name")}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 w-96 md:w-[34rem] "
                />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <label className="w-32 text-sm font-medium">メールアドレス</label>
                <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    //{...register("email")}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 w-96 md:w-[34rem]"
                />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <label className="w-32 text-sm font-medium">メッセージ</label>
                <textarea
                    id="message"
                    ref={messageRef}
                    //{...register("message")}
                    rows={4}
                    className="border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 w-96 md:w-[34rem]"
                ></textarea>
            </div>

            <div className="text-right">
                <button
                    type="submit"
                    className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    送信
                </button>
            </div>

        </form>
    )
}

export default ContactForm