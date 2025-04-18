"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AuthButton from './AuthButton';
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { signIn, signOut } from '@/redux/userSlice';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import AnimationLink from './AnimationLink';
import DropdownCart from './DropdownCart';
import { NAV_MENU } from '../../constants';




const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const userState = useSelector((state: RootState) => state.user.user)
    const cartState = useSelector((state: RootState) => state.cart.cart)

    const dispatch = useDispatch();
    const { isSignedIn, user } = useUser();

    const fetchUserInfo = async () => {
        const userSnapShot = await getDocs(query(collection(db, 'user'), where("userId", "==", `${user?.id}`)))
        const userInfo = userSnapShot.docs.map((doc: any) => ({
            ...doc.data()
        }))
        //setData(userInfo)
        if (userInfo.length === 0) {
            await setDoc(doc(db, "user", `${user?.id}`), {
                userId: user?.id,
                firstName: user?.firstName,
                lastName: user?.lastName,
                email: user?.primaryEmailAddress?.emailAddress,
                address: "",
                create_At: new Date(),
                update_At: new Date()
            })
            console.log("success add data")
            /* await setDoc(doc(db,"user", `${user?.id}`,"orderHistory",`${user?.id}-03`),{
                order: {cartState}
            }) */

        }
        dispatch(signIn({
            id: user?.id,
            first_name: user?.firstName,
            last_name: user?.lastName,
            email: user?.primaryEmailAddress?.emailAddress,
        }))

    }

    useEffect(() => {
        if (isSignedIn) {
            fetchUserInfo()

        } else {
            dispatch(signOut())
        }
    }, [isSignedIn])


    return (
        <nav className='flexBetween top-0 bg-white/50 opacity-100 p-1 min-h-[10vh] shadow-md w-full relative'>
            <div className='flex justify-center items-center font-semibold text-gray-500  m-2 p-2 text-xl'>
                <Link href="/">
                    WebShop
                </Link>
            </div>

            <div className='flexCenter p-2 left-0 lg:pr-10  '>
                <div className='flex gap-2 font-normal text-gray-500 md:gap-4 lg:gap-6'>
                    <div className='hidden md:flex duration-500'>
                        <div className='flexCenter bg-slate-100 min-w-[10px] max-w-2xl h-[50px] rounded-full relative hidden md:min-w-[250px]'>
                            <input type="text" className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-full pl-4 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 ' placeholder='キーワードを入力' />
                            <button type='button' className='p-2'><SearchIcon /></button>
                        </div>
                    </div>

                    <AnimationLink
                        href="/user/userFavourite"
                        title='気に入り'
                    >
                        <FavoriteIcon />
                    </AnimationLink>

                    <div className='flexCenter flex-col p-2 rounded-2xl  text-sm  whitespace-nowrap ' >
                        <DropdownCart />
                    </div>


                    <AuthButton />

                    <div className='flexCenter md:hidden px-2 rounded-full border border-red-100 hover:cursor-pointer '>
                        <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>


                </div>

                {/* Responsive Nav Menu (mobile)  */}
                <div
                    className={`absolute flexCenter flex-col md:hidden text-lg text-black  right-0 top-24  bg-white gap-6 font-light transform transition-transform z-50 w-full ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                    style={{ transition: "transform 0.3s ease , opacity 0.3s ease" }}
                >
                    {NAV_MENU.map((info) => (
                        <Link href={info.path} key={info.key} className='w-full p-2 text-center hover:bg-slate-100  transition-all'>{info.label}</Link>
                    ))}

                    {isSignedIn ?
                        <div className='flexCenter flex-col text-center w-full  '>
                            <Link href="/user" className='w-full p-2 text-center hover:bg-slate-100  transition-all'>マイページ</Link>
                        </div>
                        :
                        <div className='flexCenter  w-full gap-4 m-2'>
                            <SignInButton mode='modal'>
                                <div className=' p-2 text-center border px-8 rounded-full border-gray-200 hover:bg-slate-100  transition-all'>ログイン</div>
                            </SignInButton>

                            <Link href="/sign-up" className=' p-2 text-center border px-8 rounded-full border-gray-200 hover:bg-slate-100  transition-all'>新規登録</Link>
                        </div>
                    }

                    {isSignedIn &&
                        <div className='flexCenter flex-col text-center w-full p-2 hover:bg-slate-100  transition-all '>
                            <SignOutButton >
                                ログアウト
                            </SignOutButton>
                        </div>
                    }
                </div>

            </div>
        </nav>
    )
}

export default Navbar