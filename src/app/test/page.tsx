import { REVALIDATION_VALUE } from '@/constants/nextConfig'
import React, { useState } from 'react'

export const revalidate = REVALIDATION_VALUE

export default function Page() {
    // const [data, setdata] = useState<unknown>()
    // const [show, setshow] = useState(false)
    const currentTime = new Date()
    const formattedTime = currentTime.toLocaleString()
    return (
        <div className="container">
            time{formattedTime}
            {/* <button className="btn" type="button" onClick={() => {
                setshow(true)
                setdata({a:1,b:2})
            }}>
                crash
            </button>
            {
                show
                &&
                <>
                    {data}
                </>
            } */}
        </div>
    )
}
