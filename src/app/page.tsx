import React from 'react'
import Link from 'next/link'
import Process from '@/components/home/Process'
import Portfolio from '@/components/home/Portfolio'
import TechStack from '@/components/home/TechStack'
import Services from '@/components/home/Services'
import Testimonials from '@/components/common/Testimonials'
import Info from '@/components/home/Info'
import Culture from '@/components/common/Culture'
import { fetchApiData } from '@/utils/fetchApiData'
import type { Metadata } from 'next'
import Browser, { PartnerType } from '@/components/home/Browser'
import Image from 'next/image'
import { REVALIDATION_VALUE } from '@/constants/nextConfig'

import getMetaTags from '@/utils/getMetaTags'
import metaTags from '@/data/metaTags'

export const metadata: Metadata = getMetaTags(metaTags.home)

export const revalidate = REVALIDATION_VALUE

export default async function Home() {
    const services = await fetchApiData({
        url: `/services/`,
        nestedPath: 'navigation.data',
        defaultValue: []
    })
    const projects = await fetchApiData({
        url: `/projects/`,
        nestedPath: 'navigation.data',
        defaultValue: []
    })

    const partners = await fetchApiData({
        url: `/partners/?size=1000`,
        nestedPath: 'navigation.data',
        defaultValue: []
    })

    const technologies = await fetchApiData({
        url: `/technologycategorytechnologies/`,
        defaultValue: []
    })

    const infos = await fetchApiData({
        url: 'aboutus/',
        nestedPath: 'navigation.data'
    })

    return (
        <>
            {/* {JSON.stringify(services)} */}
            <div className=" bg-green-50">
                <section className=" section-wrapper-p-3xl wrapper-lg container  ">
                    <section className="wrapper-sm">
                        <article className="wrapper-3xs items-center">
                            <p className="header text-shrink max-w-[1143px]  text-center  tracking-[0.10px]  ">
                                <span className="">
                                    Shaping Tomorrow through Extraordinary Tech
                                    Excellence.
                                    <br />
                                </span>
                                <span className="text-secondary">
                                    Empowering Minds, Elevating Tech!
                                </span>
                            </p>
                            <p className="description-lg max-w-[1100px] text-center tracking-[0.10px] ">
                                Data-driven company that designs and builds
                                innovative software solutions for companies of
                                all sizes. We’re committed to helping our
                                clients achieve their business goals
                            </p>
                        </article>
                        <section className="wrapper-2xs items-center">
                            <Link href={'#section-wrapper'} className="btn">
                                Get Started
                            </Link>
                            <div className="relative inline-flex  items-center justify-center gap-[10px]">
                                <div className="flex flex-row items-center">
                                    {[1, 2, 3, 4, 5].map((index) => {
                                        return (
                                            <img
                                                key={index}
                                                className="relative h-[24px] w-[24px]"
                                                alt="Stars"
                                                src="/assets/icons/material-symbols_star.svg"
                                                height={42}
                                                width={42}
                                            />
                                        )
                                    })}
                                </div>
                                <div className="text-grey-600  font-medium leading-[23.2px] tracking-[0] ">
                                    Based on 100+ reviews
                                </div>
                            </div>
                            <div className="relative flex">
                                {partners.map((el: PartnerType) => {
                                    return (
                                        <img // TODO:change them to link
                                            height={54}
                                            width={54}
                                            alt={el.name}
                                            key={el.id}
                                            src={el.image}
                                            className=" -ml-2 h-[26px] w-[26px] rounded-full border-2 border-primary object-cover  lg:border-4"
                                        />
                                    )
                                })}
                            </div>
                        </section>
                    </section>

                    {/* browser */}
                    <Browser partners={partners} />
                </section>
            </div>
            <Services services={services} />
            <TechStack technologies={technologies} />
            <Portfolio projects={projects} />
            <Process />
            <Testimonials />
            <Info infos={infos} />
            <Culture />
            {/* <section className="h-[1900px]"></section> */}
        </>
    )
}
