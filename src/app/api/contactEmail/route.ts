import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";




export async function POST(req: NextRequest ) {

    const  { data } = await req.json()
    
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587 , 
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD,
        },
    })

    const toHostMailData = {
        from : data.email,
        to : "dalemanhappy@gmail.com",
        subject : `[問い合わせ番号:${data.id}] ${data.name}様より`,
        text: `${data.message} Send from ${data.email}`,
        html: `
            <p>[名前]</p>
            <p>${data.name}</p>
            <p>[問い合わせ内容]</p>
            <p>${data.message}</p>
            <p>メールアドレス</p>
            <p>${data.email}</p>
        `
    };

    transport.sendMail(toHostMailData, function(err , info){
        if(err) console.log(err);
        else console.log(info)
    });

    return NextResponse.json({ status: 200 })
}