import Culture from '@/components/common/Culture'
import Testimonials from '@/components/common/Testimonials'
import { ProjectType } from '@/components/home/Portfolio'
import PortfolioSingle from '@/components/home/PortfolioSingle'
import metaTags from '@/data/metaTags'
import { REVALIDATION_VALUE } from '@/constants/nextConfig'
import { fetchApiData } from '@/utils/fetchApiData'
import getMetaTags from '@/utils/getMetaTags'
import React from 'react'

export const metadata = getMetaTags(metaTags.portfolio)
export const revalidate = REVALIDATION_VALUE

export default async function Page() {
    const projects = await fetchApiData({
        url: `/projects/`,
        nestedPath: 'navigation.data',
        defaultValue: []
    })

    /* TODO: view more.. and apply pagination */

    return (
        <>
            <section className=" section-wrapper-p-50   bg-green-50">
                <div className="wrapper-3xs container items-center">
                    <p className="title">Our Portfolio</p>
                    <p className="header">
                        Coding the{' '}
                        <span className="text-secondary">Future;</span>
                    </p>
                    <p className="header">
                        Innovate<span className="text-secondary">.</span> Create
                        <span className="text-secondary">.</span> Inspire
                        <span className="text-secondary">.</span>
                    </p>
                    <p className="description max-w-[874px] text-center">
                        Mindrisers: Where Tech Dreams Take Shape. Explore our
                        dynamic portfolio and visionary projects reshaping
                        tomorrow's possibilities.
                    </p>
                </div>
            </section>
            <section className="section-wrapper-m-xl container  ">
                <ul className="wrapper-sm">
                    {projects.map((el: ProjectType, index: number) => {
                        return (
                            <PortfolioSingle
                                project={el}
                                key={index}
                                index={index}
                            />
                        )
                    })}
                </ul>
            </section>
            <Testimonials />
            <Culture />
        </>
    )
}
