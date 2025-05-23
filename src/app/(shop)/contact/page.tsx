import ContactForm from '@/components/ContactForm'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='w-full flexCenter flex-col '>
        <h1 className='font-bold text-2xl mt-8 flex justify-center'>問い合わせフォーム</h1>
        <ContactForm/>
    </div>
  )
}

export default ContactPage