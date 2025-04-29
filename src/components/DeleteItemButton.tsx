"use client"
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const DeleteItemButton = ( {userId , productId} : { userId : string | undefined , productId : string } ) => {

    const handleDeleteItem = async (id : string) => {
        await deleteDoc(doc(db, "user", `${userId}`, "FavouriteItems", `${id}`))
    }

    return (
        <DeleteIcon className='hover:cursor-pointer' onClick={() => handleDeleteItem(productId)} />
    )
}

export default DeleteItemButton