import Culture from '@/components/common/Culture'
import { Category } from '@/components/home/TechStack'
import { Card } from '@/components/technology/Card'
import { Wrapper } from '@/components/technology/Wrapper'
import metaTags from '@/data/metaTags'
import { REVALIDATION_VALUE } from '@/constants/nextConfig'
import { fetchApiData } from '@/utils/fetchApiData'
import getMetaTags from '@/utils/getMetaTags'
import React from 'react'

export const metadata = getMetaTags(metaTags.technology)
export const revalidate = REVALIDATION_VALUE

async function Page() {
    const technologies: Category[] = await fetchApiData({
        url: `/technologycategorytechnologies/`,
        defaultValue: []
    })

    return (
        <div className="  ">
            <div>
                <section className=" section-wrapper-p-50   bg-green-50">
                    <div className="wrapper-3xs container items-center text-center">
                        <p className="title">Technology</p>
                        <p className="header max-w-[986px]">
                            Technology behind your{' '}
                            <span className="text-secondary">Technology</span>
                        </p>

                        <p className="description max-w-[874px] text-center">
                            Mindrisers: Where Tech Dreams Take Shape. Explore
                            our dynamic portfolio and visionary projects
                            reshaping tomorrow's possibilities.
                        </p>
                    </div>
                </section>

                <div className=" section-wrapper-m-3xl container mt-0 flex flex-col">
                    {technologies.map((el, index) => {
                        return (
                            <section
                                key={index}
                                className="  section-wrapper-m-3xl mb-0  "
                            >
                                <div className="flex flex-col items-start gap-[20px] lg:flex-row lg:px-[40px]">
                                    <div className="w-[314px] ">
                                        <p className="header-xs text-shrink mb-5 text-green">
                                            {el.name}
                                        </p>
                                        <p className=" description  ">
                                            {el.short_description}
                                        </p>
                                    </div>
                                    <section
                                        className="wrapper-sm flex-grow w-full"
                                    >
                                        {el.sub_categories.map((el) => {
                                            return (
                                                <Wrapper
                                                    key={el.id}
                                                    title={el.name}
                                                >
                                                    {el.technologies.map(
                                                        (el) => {
                                                            return (
                                                                <Card
                                                                    key={el.id}
                                                                    technology={
                                                                        el
                                                                    }
                                                                />
                                                            )
                                                        }
                                                    )}
                                                </Wrapper>
                                            )
                                        })}
                                    </section>
                                </div>
                            </section>
                        )
                    })}
                </div>
            </div>
            <Culture />
        </div>
    )
}

export default Page
