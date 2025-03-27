"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AuthButton from './AuthButton';
import { useUser } from '@clerk/nextjs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { signIn, signOut } from '@/redux/userSlice';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import AnimationLink from './AnimationLink';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const { isSignedIn, user } = useUser();

    const userState = useSelector((state: RootState) => state.user.user)

    const dispatch = useDispatch();


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

    //console.log("UserState:", userState)
    /*     <div className=" h-fit w-fit "
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="border border-red-200 relative text-black ">
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)"
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-slate-300 transition-transform duration-300 ease-out"
          />
          HomePage
        </div>
      </div> */


    return (
        <nav className='flexBetween top-0 bg-white/50 opacity-100  p-1 min-h-[10vh] shadow-md w-full'>
            <div className='flex justify-center items-center font-semibold text-gray-500  m-2 p-2 text-xl'>
                <Link href="/">
                    WebShop
                </Link>
            </div>

            <div className='flexCenter p-2 pr-10 left-0 '>
                <div className='flex gap-2 font-normal text-gray-500 md:gap-6 lg:gap-10'>
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

                    <AnimationLink 
                        href="/shoppingCart"
                        title='カート'
                    >
                       <ShoppingCartIcon />
                    </AnimationLink>

                    <AuthButton />

                    <Link href="/" className='flexCenter flex-col bg-slate-200 px-2 rounded-full' >
                        <MenuIcon />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar