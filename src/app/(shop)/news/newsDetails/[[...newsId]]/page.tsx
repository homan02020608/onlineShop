import { Timestamp, doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { db } from '../../../../../../firebase/firebase'


const page = async({ params } : { params : Promise<{newsId : string}> }) => {
  const newsIdParams = (await params).newsId
  const newRef = doc(db , "news", `${newsIdParams}`)
  const newSnap = await getDoc(newRef)
  const newInfo = newSnap.data()

  return (
    <div>
    
    </div>
  )
}

export default page