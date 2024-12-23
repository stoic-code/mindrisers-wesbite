import React from 'react'
import Image from 'next/image'
import Culture from '@/components/common/Culture'
import { fetchApiData } from '@/utils/fetchApiData'
import Listing from '@/components/career/Listing'
import getMetaTags from '@/utils/getMetaTags'
import metaTags from '@/data/metaTags'
import { REVALIDATION_VALUE } from '@/constants/nextConfig'

export type Category = {
    id: number
    name: string
}

export type Job = {
    id: number
    category: Category
    title: string
    open_positions: number
    career_type: string
    created_at: string // Assuming this is a timestamp
    updated_at: string // Assuming this is a timestamp
}

export const metadata =  getMetaTags(metaTags.career)


export const revalidate = REVALIDATION_VALUE


export default async function page() {
    const careers: Job[] = await fetchApiData({
        url: `/careers/?size=100`,
        nestedPath: 'navigation.data',
        defaultValue: []
    })

    return (
        <>
            <section className=" section-wrapper-p-50   bg-green-50">
                <div className="wrapper-3xs container items-center text-center">
                    <p className="title">Career</p>
                    <p className="header max-w-[986px]">
                        Big Opportunities{' '}
                        <span className="text-secondary"> Only for you !</span>
                    </p>

                    <p className="description max-w-[874px] text-center">
                        Mindrisers: Where Tech Dreams Take Shape. Explore our
                        dynamic portfolio and visionary projects reshaping
                        tomorrow&apos;s possibilities.
                    </p>
                </div>
            </section>

            <div className="container  flex items-center py-[40px]  ">
                <img
                    src={'/assets/images/career/cover.webp'}
                    alt='cover'
                    height={400}
                    width={1320}
                    loading='lazy'
                    className="object-contain "
                />
            </div>

            <div className="container  flex justify-center ">
                <div className=" max-w-[983px]">
                    <img
                        src={'/assets/images/career/icon.jpg'}
                        className="mb-[10px] w-[32px] lg:w-[64px]"
                    />
                    <p className="header-xs text-shrink font-semibold tracking-[0.1px] text-[#DDDADB] ">
                        We continuously{' '}
                        <span className="text-primary">hire</span> very often to
                        cater best team in the Nation. Stay tune for updates.
                    </p>
                </div>
            </div>
            
                <Listing  careers={careers}/>
            <Culture />
        </>
    )
}
