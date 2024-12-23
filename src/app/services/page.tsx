import Culture from '@/components/common/Culture'
import Testimonials from '@/components/common/Testimonials'
import { ServiceType } from '@/components/home/Services'
import ServiceSingle from '@/components/services/ServiceSingle'
import metaTags from '@/data/metaTags'
import { REVALIDATION_VALUE } from '@/constants/nextConfig'
import { fetchApiData } from '@/utils/fetchApiData'
import getMetaTags from '@/utils/getMetaTags'
import React from 'react'

export const metadata = getMetaTags(metaTags.services)
export const revalidate = REVALIDATION_VALUE

export default async function page() {
    const services = await fetchApiData({
        url: '/services/',
        nestedPath: 'navigation.data'
    })

    return (
        <>
            <section className=" section-wrapper-p-50   bg-green-50">
                <div className="wrapper-3xs container items-center text-center">
                    <p className="title">Services</p>
                    <p className="header max-w-[986px]">
                        Elevate your Technology with our{' '}
                        <span className="text-secondary">
                            Innovative services.
                        </span>
                    </p>

                    <p className="description max-w-[874px] text-center">
                        Mindrisers: Where Tech Dreams Take Shape. Explore our
                        dynamic portfolio and visionary projects reshaping
                        tomorrow's possibilities.
                    </p>
                </div>
            </section>
            <section className="section-wrapper-m-xl container  ">
                <ul className="wrapper-md">
                    {services.map((service: ServiceType, index: number) => {
                        return (
                            <ServiceSingle
                                service={service}
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
