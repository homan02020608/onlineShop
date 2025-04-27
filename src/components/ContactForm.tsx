"use client"
import React, { useRef } from 'react'
import { motion } from "framer-motion"


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
        <motion.form 
            className='flexCenter flex-col gap-10 p-8 m-10 ' 
            onSubmit={(e:React.FormEvent<HTMLFormElement>) => submitForm(e)} 
            initial={{ opacity: 0 , x : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ease:"easeInOut", duration: 0.8}}
        >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <label className="w-32 text-sm font-medium">名前</label>
                <input
                    type="text"
                    id="name"
                    ref={nameRef}
                    placeholder='お客様のフルネームご入力ください'
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
                    placeholder='メールアドレスご入力ください'
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
                    placeholder='問い合わせ内容ご入力ください'
                    rows={4}
                    className="border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 w-96 md:w-[34rem]"
                ></textarea>
            </div>

            <div className="text-right">
                <button
                    type="submit"
                    className="bg-slate-500 text-white px-8 py-2 rounded  hover:scale-105 transition-transform "
                >
                    送信
                </button>
            </div>

        </motion.form>
    )
}

export default ContactForm