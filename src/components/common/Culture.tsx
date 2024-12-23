import React from 'react'
import Faqs from './Faqs'
import Image from 'next/image'
import { fetchApiData } from '@/utils/fetchApiData'

export type FAQItem = {
    id: number
    title: string
    content: string
    question: string
    answer: string
    created_at: string
    updated_at: string
}

/* make it headless */
export default async function Culture() {
    let faqs:FAQItem[] = await fetchApiData({
        url: `/faqs/`,
        nestedPath: 'navigation.data',
        defaultValue: []
    })

    faqs = faqs.slice(0,5).map((el) => {
        return { ...el, title: el.question, content: el.answer }
    })

    return (
        <section className="    section-wrapper-p-3xl  bg-green-50">
            <div className="container grid gap-20 lg:grid-cols-2 lg:gap-5">
                <div id="" className=" flex flex-col gap-[40px] ">
                    <div>
                        <p className=" title">Culture & Work Speaks</p>
                        <p className=" header-sm my-[10px] max-w-[540px]">
                            Why with{' '}
                            <span className=" text-orange-500">
                                {' '}
                                Mindrisers ?
                            </span>
                        </p>
                        <p className=" description-sm max-w-[540px] ">
                            At Mindrisers, we have a dedicated team working
                            dedicatedly to convert your dream into reality and
                            achieve it to the fullest.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            alt=""
                            width={540}
                            height={300}
                            className=" w-[540px] rounded-[12px]"
                            src={'/assets/tech_icons/group_pic.webp'}
                        />
                        <div className="absolute -bottom-20 -left-20 flex scale-50 items-end  md:scale-75 lg:scale-100">
                            <div className="  h-[154px] w-[154px] rounded-full bg-orange-100 "></div>
                            <div className="  h-[50px] w-[50px] rounded-full bg-orange-200 "></div>
                            <div className="  h-[20px]  w-[20px]  rounded-full bg-orange-300 "></div>
                        </div>
                    </div>
                </div>
                <div id="second container" className=" ">
                    <Faqs faqs={faqs} />
                </div>
            </div>
        </section>
    )
}
