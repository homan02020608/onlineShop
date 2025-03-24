import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server';


const page = async () => {
    const { userId, sessionId } = await auth();
    const user = await currentUser();
    return (
        <div>
            <div>UserId: {userId}</div> 
            <div>SessionId: {sessionId}</div>

        </div>
    )
}

export default page