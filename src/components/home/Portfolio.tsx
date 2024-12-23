import Link from 'next/link'
import React from 'react'
import PortfolioSingle from './PortfolioSingle'

export type ProjectTag = {
    id: number
    name: string
    created_at: string
    updated_at: string
}
    /* new coments test */


export type ProjectType = {
    id: number
    image: string
    title: string
    nature: string
    short_description: string
    description: string
    created_at: string
    updated_at: string
    project_tags: ProjectTag[]
}

export default function Portfolio({ projects }: { projects: ProjectType[] }) {
    return (
        <>
            <section className="section-wrapper-m-xl wrapper-xl container  ">
                <div className="">
                    <div className=" wrapper-3xs  max-w-[676px]  ">
                        <p className=" title">Our Portfolio</p>
                        <p className="header leading-[145%] ">
                            <span>Building the</span>
                            &nbsp;
                            <span className="text-secondary">Future;</span>
                        </p>
                        <p className="header leading-[145%]">
                            Code
                            <span className="text-secondary">.&nbsp;</span>
                            Create
                            <span className="text-secondary">.&nbsp;</span>
                            Co-operate
                            <span className="text-secondary">.&nbsp;</span>
                        </p>
                        <p className="description">
                            Fueled by the spirit of innovation, Mindrisers
                            Technology is crafting the future in the dynamic
                            landscapes of Nepal and Australia. Join us on a
                            journey of coding brilliance, creative endeavors,
                            and collaborative success – where we build tomorrow,
                            together!
                        </p>
                    </div>
                </div>
                <ul className="wrapper-sm w-full ">
                    {projects.slice(0, 3).map((el, index) => {
                        return (
                            <PortfolioSingle
                                project={el}
                                index={index}
                                key={index}
                            />
                        )
                    })}
                </ul>
            </section>
            <section className="section-wrapper-m-xl wrapper-md container flex md:flex-row md:items-center">
                <p>
                    <span className="leading-[145 text-xl text-secondary">
                        &amp;
                    </span>
                    <span className="text-grey-900  ml-[10px] text-2xl font-medium leading-[145%]">
                        {' '}
                        {/* TODO: convert / check all these text-2xl like */}
                        {projects.length - 3} more...
                    </span>
                </p>
                <Link
                    href="/portfolio"
                    className="link--circular capitalize text-primary"
                >
                    View all portfolio
                </Link>
            </section>
        </>
    )
}
