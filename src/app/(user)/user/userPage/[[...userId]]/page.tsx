import React from 'react'

interface UserIdProps {
  params: Promise<{ userId: string }>;
}

const page = async ({ params }: UserIdProps) => {

  const userId = (await params).userId;

  return (
    <div>
      UserIdProps: { userId }
    </div>
  )
}

export default page