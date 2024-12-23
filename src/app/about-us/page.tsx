import React from 'react'
import Image from 'next/image'
import Testimonials from '@/components/common/Testimonials'
import Culture from '@/components/common/Culture'
import { fetchApiData } from '@/utils/fetchApiData'
import { SERVER_URL } from '../../constants/domains'
import DepartmentCart, {
    Department
} from '@/components/about-us/DepartmentCart'
import getMetaTags from '@/utils/getMetaTags'
import metaTags from '@/data/metaTags'
import { REVALIDATION_VALUE } from '@/constants/nextConfig'

export const metadata = getMetaTags(metaTags.aboutUs)
export const revalidate = REVALIDATION_VALUE

export default async function page() {
    const data: Department[] = await fetchApiData({
        url: `/departmentourteams/`
    })

    return (
        <>
            <div className=" section-wrapper-p-50 bg-green-50">
                <div className="container">
                    <div className="wrapper-3xs flex flex-col items-center justify-between text-center  lg:flex-row lg:items-end lg:text-left  ">
                        <div className="flex flex-col gap-[10px]">
                            <p className="title">About us</p>
                            <p className="text-shrink  header-xs font-medium text-gray-900">
                                We excel as
                            </p>
                            <p className="header-xs text-shirnk max-w-[650px] text-secondary">
                                imaginative minds, solution finders, and
                                outstanding communicators.
                            </p>
                        </div>
                        <p className="description max-w-[314px] ">
                            At Mindrisers, we have had the privilege of
                            partnering with some of the most innovative and
                            forward-thinking companies in the tech industry.
                        </p>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="section-wrapper-m-xl container flex flex-col gap-6 lg:flex-row">
                    <div className=" mb-0 lg:max-w-[314px]">
                        <p className="text-shrink header-xs text-primary ">
                            Imaginative minds
                        </p>
                        <p className=" mt-5 text-gray-600">
                            Our Solutions helps founders craft best technology
                            for their vision and provide service to the
                            community
                        </p>
                    </div>

                    <div className=" mb-0">
                        <img
                            src={'/assets/images/about/cover.webp'}
                            height={400}
                            width={983}
                        />
                        <img
                            src={'/assets/images/about/Vector.jpg'}
                            width={64}
                            height={54}
                            className="my-[16px] w-[32px] md:my-[20px] md:w-[64px]"
                        />
                        <p className="header-xs text-shrink font-semibold tracking-[0.1px] !text-gray-300">
                            We specialize in{' '}
                            <span className="text-primary">
                                transforming concepts
                            </span>{' '}
                            into impressive
                            <span className="text-primary">
                                {' '}
                                outcomes, instigating change
                            </span>
                            , and generating tangible impact as
                            <span className="text-primary">
                                {' '}
                                digital magicians.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className=" section-wrapper-m-3xl mb-0  flex flex-col-reverse justify-start gap-8 p-0 lg:flex-row   lg:justify-between">
                    <div className="w-full">
                        <div className="mb-[10px] flex gap-[10px]">
                            <img
                                src={'/assets/images/about/logo1.webp'}
                                alt="logo"
                                height={20}
                                width={20}
                            />
                            <p className="font-semibold text-orange-600">
                                Our Dynamic team Specializes in{' '}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 justify-between  md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                            {[1, 2, 3, 4, 5, 6].map((el, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex max-w-[300px] gap-[10px] p-0 py-[20px]"
                                    >
                                        <div className="h flex w-[24px] items-center  justify-center self-center rounded bg-gray-100 ">
                                            <p className="py-[2.5px] text-[14px] font-medium text-gray-600  ">
                                                0{index + 1}
                                            </p>
                                        </div>
                                        <p className="leading-[23.2px] text-primary">
                                            UX & Product Research
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className=" max-w-[314px]">
                        <p className="mb-[20px] text-[36px] text-primary ">
                            Solution finder
                        </p>
                        <p className="text-shrink">
                            Web Design and Development helps founders craft best
                            technology for their vision and provide service to
                            the community
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className=" flex flex-col gap-[20px]  p-0 lg:flex-row">
                    <div className=" section-wrapper-m-3xl mb-0 max-w-[314px] ">
                        <p className="header-xs mb-[20px] text-primary   ">
                            Outstanding Team
                        </p>
                        <p className="text-shrink  ">
                            Web Design and Development helps founders craft best
                            technology for their vision and provide service to
                            the community
                        </p>
                    </div>

                    <div className="section-wrapper-m-3xl mb-0 ">
                        {data.map((el, index) => {
                            return <DepartmentCart data={el} key={index} />
                        })}
                    </div>
                </div>
            </div>
            <Testimonials />
            <Culture />
        </>
    )
}
