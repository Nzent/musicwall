import React from 'react'
import { useRouter } from 'next/dist/client/router'
export default function Index() {
    const router = useRouter()
    const { error } = router.query
    return (
        <>
            <div className='h-screen w-full flex items-center justify-center'>
                {error === 'OAuthAccountNotLinked' && <span className='text-2xl'>Sorry, Your Email linked with another account </span>}
            </div>
        </>
    )
}
